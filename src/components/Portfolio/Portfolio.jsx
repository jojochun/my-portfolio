import { useState } from "react";
import "./portfolio.scss";
import apple from "../../projectassets/projectimages/appleorchard.png";
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
    {
      title: "Happy Harvester",
      url: "https://happy-harvesters.herokuapp.com",
      repo: "https://github.com/scottrohrig/apple-orchard-games",
      img: apple,
    },
    {
      title: "Penguin Planner",
      url: "https://penguin-planner.herokuapp.com/",
      repo: "https://github.com/stuart-rickard/gp-penguin",
      img: penguin,
    },
    {
      title: "Run Buddy",
      url: "https://jojochun.github.io/run-buddy/",
      repo: "https://github.com/jojochun/run-buddy",
      img: run,
    },
    {
      title: "Budget Tracker",
      url: "https://jojochun.github.io/budget-tracker/",
      repo: "https://github.com/jojochun/budget-tracker",
      img: budgetTracker,
    },
    {
      title: "Sunny Weekend",
      url: "https://deivrs60.github.io/sunny-weekend/",
      repo: "https://github.com/deivrs60/sunny-weekend",
      img: sunny,
    },
    {
      title: "Weather Dashboard",
      url: "https://jojochun.github.io/weather-dashboard/",
      repo: "https://github.com/jojochun/weather-dashboard",
      img: weather,
    },
    {
      title: "Work Day Scheduler",
      url: "https://jojochun.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/jojochun/Work-Day-Scheduler",
      img: scheduler,
    },
    {
      title: "Coding Quiz",
      url: "https://jojochun.github.io/CodingQuiz/",
      repo: "https://github.com/jojochun/CodingQuiz",
      img: quiz,
    },
    {
      title: "Horiseon",
      url: "https://jojochun.github.io/refactorcode/",
      repo: "https://github.com/jojochun/refactorcode",
      img: horiseon,
    },
    {
      title: "Team Profile",
      url: "https://jojochun.github.io/Team-Profile-Generator/",
      repo: "https://github.com/jojochun/Team-Profile-Generator",
      img: team,
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        {projects.map((project, i) => (
          <div key={i} className="item">
            <h3>{project.title}</h3>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.img} alt="" />
            </a>
            <div>
              <a href={project.repo} target="_blank" rel="noreferrer">
                github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
