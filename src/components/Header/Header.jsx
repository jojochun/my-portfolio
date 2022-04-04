import "./header.scss";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="wrapper">
        <div className="left">
          <a href="about" className="logo">
            Joanne Chun
          </a>
        </div>

        <div className="right">
          <nav>
            <span>
              <a href="#about">Home</a>
            </span>
            <span>
              <a href="#portfolio">Portfolio</a>
            </span>
            <span>
              <a href="#footer">Resume</a>
            </span>
            <span>
              <a href="#contact">Contact</a>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}
