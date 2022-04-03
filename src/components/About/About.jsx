import "./about.scss";

export default function About() {
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
          <h3>The end of all knowledge</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
