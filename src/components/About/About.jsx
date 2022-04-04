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
      strings: ["Innovate", "Craft", "Program", "Develop"],
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
          <h3>
            I am a bioengineering/pharmaceutical scientist researching the
            molecular genetics and signaling pathways during liver cancer
            growth. My goal is to apply my knowledge of computer science and
            coding to help develop new therapies to treat this deadly disease.
          </h3>
          <h1>Joanne Chun</h1>
          <h2>
            Aiming to <span ref={textRef}></span>
          </h2>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
