import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/puzzle.jpg" alt="" />
      </div>

      <div className="right">
        <h1>Let's Connect!</h1>

        <div class="tel">
          <p>808.780.4564</p>
        </div>
        <div class="email">
          <a href="mailto:jkchun@protonmail.com">
            <p>jkchun@protonmail.com</p>
          </a>
        </div>
        <div class="git">
          <a href="https://github.com/jojochun" target="_blank">
            <p>github</p>
          </a>
        </div>
        <div class="link">
          <a
            href="https://www.linkedin.com/in/joanne-chun-20b86313a/"
            target="_blank"
          >
            <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
