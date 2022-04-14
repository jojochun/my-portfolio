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
        <h1>Let's Connect!</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you for contacting me!</span>}
        </form>
      </div>

      <div className="right">
        <img src="assets/puzzle.jpg" alt="" />
        <div className="tel">
          <p>808.780.4564</p>
        </div>
        <div className="email">
          <a href="mailto:jkchun@protonmail.com">
            <p>jkchun@protonmail.com</p>
          </a>
        </div>
        <div className="git">
          <a href="https://github.com/jojochun" target="_blank">
            <p>github</p>
          </a>
        </div>
        <div className="link">
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
