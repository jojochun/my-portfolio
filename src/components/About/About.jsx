import "./about.scss";
import { init } from "ityped";
// useRef instead of: const myElement = document.querySelector('#myElement')
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ["Use with React.js!", "Yeah!"],
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="photo">
          <img src="assets/selfportrait.jpg" alt="Joanne wearing a white top" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>My name is </h2>
          <h1>Joanne Chun</h1>
          <h3>
            The end of all knowledge<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
