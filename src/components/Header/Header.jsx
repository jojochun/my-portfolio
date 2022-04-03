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

        <div className="right"></div>
      </div>
    </div>
  );
}
