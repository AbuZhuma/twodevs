import { AnimWrapper } from "../../layout/animwrapper/AnimWrapper"
import CanUse from "../../widgets/home/canuse/CanUse"
import Feadback from "../../widgets/home/feedback/Feadback"
import HeroSection from "../../widgets/home/hero/HeroSection"
import Quickstart from "../../widgets/home/quickstart/Quickstart"
import TwoDevs from "../../widgets/home/twodevs/TwoDevs"
import WhyUs from "../../widgets/home/whyus/WhyUs"
import styles from "./styles.module.css"

const HomePage = () => {
  return (
    <AnimWrapper className={styles.home}>
      <HeroSection />
      <CanUse />
      <Quickstart />
      <WhyUs />
      <Feadback />
      <TwoDevs />
    </AnimWrapper>
  )
}

export default HomePage
