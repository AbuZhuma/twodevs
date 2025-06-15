import { AnimWrapper } from '../../layout/animwrapper/AnimWrapper'
import PostsList from '../../widgets/blog/postList/PostsList';
import styles from "./styles.module.css"
import { useEffect } from 'react';
import { LazyPost } from '../../widgets/blog/postSkeleton/LasyPost';
import LoadingSpinner from '../../shared/ui/laodingSpinner/LoadingSpinner';
import { useNewsStore } from './api';

const BlogPage = () => {
      const {news, getNews} = useNewsStore()
      const geter = async () => {
           await getNews()
      }
      useEffect(() => {
            geter()
      }, [])
      return (
            <AnimWrapper>
                  <div className={styles.inner}>
                        <div className={styles.nav}>
                              <p className={styles.title}>Blog-news</p>
                        </div>
                        <PostsList>
                              {news.length ? news.map((postData, index) => (
                                    <LazyPost
                                          key={`${postData.title}-${index}`}
                                          postData={postData}
                                    />
                              )) : <LoadingSpinner/>}
                        </PostsList>
                  </div>


            </AnimWrapper>
      )
}

export default BlogPage
