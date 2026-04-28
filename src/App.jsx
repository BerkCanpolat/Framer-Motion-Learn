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
      <RandomContent children={"Random Top Content"} />

      <ScrollAnimation />

      <RandomContent children={"Random Bottom Content"} />
    </ReactLenis>
  )
}

export default App
