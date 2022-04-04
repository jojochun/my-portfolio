import { useState } from "react";
import WorkList from "../WorkList/WorkList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Penguin Planner",
    },
    {
      id: "horiseon",
      title: "Horiseon",
    },
    {
      id: "runbuddy",
      title: "Run Buddy",
    },
    {
      id: "teamprofile",
      title: "Team Profile",
    },
    {
      id: "budget",
      title: "Budget Tracker",
    },
    {
      id: "scheduler",
      title: "Scheduler",
    },
    {
      id: "weather",
      title: "Weather Dashboard",
    },
    {
      id: "sunny",
      title: "Sunny Weekend",
    },
    {
      id: "quiz",
      title: "Coding Quiz",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <WorkList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>

        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>

        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Penguin Planner App</h3>
        </div>
      </div>
    </div>
  );
}
