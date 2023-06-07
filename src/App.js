import React, { useRef, useEffect } from 'react';
import './App.css';
// import { TweenMax } from 'gsap/gsap-core';
// import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedPage from './Aos/AnimatedPage';

// gsap.registerPlugin(ScrollTrigger);
function App() {

  // let circle = useRef(null)
  // let circleRed = useRef(null)
  // let circleBlue = useRef(null)

  // useEffect(() => {
  //   TweenMax.from(circle, .8, { opacity: 0, x: 40, ease: Power3.ease })
  //   TweenMax.from(circleRed, .8, { opacity: 0, x: 40, ease: Power3.ease, delay: .2 })
  //   TweenMax.from(circleBlue, .8, { opacity: 0, x: 40, ease: Power3.ease, delay: .4 })
  // }, [])

  return (
    <div className="App">
      <AnimatedPage/>
    </div>
  );
}

export default App;
