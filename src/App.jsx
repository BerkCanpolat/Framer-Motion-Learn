import Animationcontrols from "./Components/Animationcontrols"
import BasicsOfMotion from "./Components/BasicsOfMotion"
import Gestures from "./Components/Gestures"
import ScrollAnimations from "./Components/ScrollAnimations"
import ViewBasedAnimations from "./Components/ViewBasedAnimations"
import Practice from "./Practice/Practice"
import ProfileCard from "./PracticeSecond/ProfileCard"
import RandomContent from "./Projects/ScrollAnimation/RandomContent"
import ScrollAnimation from "./Projects/ScrollAnimation/ScrollAnimation"
import {ReactLenis} from "lenis/react";
import RandomContentPractice from "./Projects/ScrollPractice/RandomContentPractice"
import ScrollPractice from "./Projects/ScrollPractice/ScrollPractice"
import ScrollAnimationTwo from "./Projects/ScrollAnimationTwo/ScrollAnimationTwo"
import ScrollCard from "./Projects/ScrollCard/ScrollCard"
import HomePage from "./Projects/Demo/HomePage"
import { BrowserRouter, Route, Router, Routes } from "react-router"
import ScrollNavbar from "./Projects/Demo/DemoComponents/ScrollNavbar"
import PageTwo from "./Projects/Demo/PageTwo"
import PageThree from "./Projects/Demo/PageThree"



function App() {

  return (
    <ReactLenis root>
      {/* <BasicsOfMotion /> */}
      {/* <Practice /> */}
      {/* <Gestures /> */}
      {/* <Animationcontrols /> */}
      {/* <ViewBasedAnimations /> */}
      {/* <ScrollAnimations /> */}

      {/* <ProfileCard /> */}

      {/* Scroll Animation */}
      {/* <RandomContent children={"Random Top Content"} />

      <ScrollAnimation />

      <RandomContent children={"Random Bottom Content"} /> */}

      {/* Practice Scroll */}
      {/* <RandomContentPractice children={"Practice Top Content"} />
      <ScrollPractice />
      <RandomContentPractice children={"Practice Bottom Content"} /> */}

      {/* Scroll Projects Two */}
      {/* <ScrollAnimationTwo /> */}

      {/* Scroll Card */}
      {/* <ScrollCard /> */}

      {/* DEMO PROJECT */}

      <BrowserRouter>
      <ScrollNavbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="two" element={<PageTwo />}/>
        <Route path="three" element={<PageThree />}/>
      </Routes>
      </BrowserRouter>

    </ReactLenis>
  )
}

export default App
