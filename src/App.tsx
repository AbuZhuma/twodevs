import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import LoadingSpinner from "./shared/ui/laodingSpinner/LoadingSpinner";


type LazyComponent = ReturnType<typeof lazy>;

const createLazyRoute = (Component: LazyComponent) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

const Home = lazy(() => import("./pages/home/HomePage"));
const Docs = lazy(() => import("./pages/docs/Docs"))
const Blog = lazy(() => import("./pages/blog/BlogPage"))

const App: FC = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={createLazyRoute(Home)} />
          <Route path="/portfolio" index element={createLazyRoute(Docs)} />
          <Route path="/blog" index element={createLazyRoute(Blog)} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;