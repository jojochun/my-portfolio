import { useState } from "react";
import "./portfolio.scss";
import penguin from "../../projectassets/projectimages/Penguin-Planner.png";
import run from "../../projectassets/projectimages/runbuddy.jpeg";
import budgetTracker from "../../projectassets/projectimages/budget-tracker.png";
import sunny from "../../projectassets/projectimages/sunnyweekend.png";
import weather from "../../projectassets/projectimages/weatherboard.png";
import scheduler from "../../projectassets/projectimages/scheduler.png";
import quiz from "../../projectassets/projectimages/coding-quiz.png";
import horiseon from "../../projectassets/projectimages/Horiseon.png";
import team from "../../projectassets/projectimages/Team-profile.png";

export default function Portfolio() {
  const projects = [
    { title: "Penguin Planner", url: "", repo: "", img: penguin },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
    { title: "", url: "", repo: "", img: "" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        {projects.map((project) => (
          <div className="item">
            <h3>{project.title}</h3>
            <a href="https://penguin-planner.herokuapp.com/" target="_blank">
              <img src={project.img} alt="" />
            </a>
          </div>
        ))}

        <div className="item">
          <a href="https://jojochun.github.io/run-buddy/" target="_blank">
            <img src={run} alt="" />
          </a>
          <h3>Run Buddy</h3>
        </div>

        <div className="item">
          <a href="https://jojochun.github.io/budget-tracker/" target="_blank">
            <img src={budgetTracker} alt="" />
          </a>
          <h3>Budget Tracker</h3>
        </div>

        <div className="item">
          <a href="https://deivrs60.github.io/sunny-weekend/" target="_blank">
            <img src={sunny} alt="" />
          </a>
          <h3>Sunny Weekend</h3>
        </div>

        <div className="item">
          <a
            href="https://jojochun.github.io/weather-dashboard/"
            target="_blank"
          >
            <img src={weather} alt="" />
          </a>
          <h3>Weather Dashboard</h3>
        </div>

        <div className="item">
          <a
            href="https://jojochun.github.io/Work-Day-Scheduler/"
            target="_blank"
          >
            <img src={scheduler} alt="" />
          </a>
          <h3>Work Day Scheduler</h3>
        </div>

        <div className="item">
          <a href="https://jojochun.github.io/CodingQuiz/" target="_blank">
            <img src={quiz} alt="" />
          </a>
          <h3>Coding Quiz</h3>
        </div>

        <div className="item">
          <a href="https://jojochun.github.io/refactorcode/" target="_blank">
            <img src={horiseon} alt="" />
          </a>
          <h3>Horiseon</h3>
        </div>

        <div className="item">
          <a
            href="https://jojochun.github.io/Team-Profile-Generator/"
            target="_blank"
          >
            <img src={team} alt="" />
          </a>
          <h3>Team Profile</h3>
        </div>
      </div>
    </div>
  );
}
