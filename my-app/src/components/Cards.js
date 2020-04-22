import React from "react";

const Cards = () => {
    //Need to move this to it's own json file and import it in
    const projects = [
        {
        id: 1,
        name: "MoJo Mood Journal",
        desciption:
            "This modern mood ring journal allows you to record and reflect on your feelings.",
        github: "https://github.com/Keylee-LNBY/MoJo",
        deployment: "https://aqueous-sea-47525.herokuapp.com/",
        img: "public/mojo.png",
        },
        {
        id: 2,
        name: "Weather",
        desciption:
            "This application pulls in the Open Weather API and display current and future weather conditions for a city of the users choice.",
        github: "https://github.com/Keylee-LNBY/Weather",
        deployment: "https://keylee-lnby.github.io/Weather/",
        img: "public/weather.png",
        },
        {
        id: 3,
        name: "DishOut",
        desciption:
            "DishOut is an application aimed to help users find recipes for ingredients that have been stuck unused in their pantries or fridge.",
        github: "https://github.com/Keylee-LNBY/DishOut",
        deployment: "https://keylee-lnby.github.io/DishOut/",
        img: "public/dishout.png",
        },
        {
        id: 4,
        name: "Fitness Tracker",
        desciption:
            "An application that helps you visually track your fitness with charts that update as you input information.",
        github: "https://github.com/Keylee-LNBY/Fitness-Tracker",
        deployment: "https://shrouded-ridge-77681.herokuapp.com/",
        img: "public/fitness.png",
        },
        {
        id: 5,
        name: "Budgetting App",
        desciption:
            "This is an application that allows users to track their transactions on & offline. Users are also given a chart to have a visual of their transactions, and the total money they have left.",
        github: "https://github.com/Keylee-LNBY/Budgetting-App",
        deployment: "https://secret-beach-48232.herokuapp.com/",
        img: "public/budget.png",
        },
        {
        id: 6,
        name: "Untitled 404",
        desciption:
            "This is a application for simpe games built using React & Pixi.js.",
        github: "https://github.com/Keylee-LNBY/UntitledError404",
        deployment: "https://github.com/Keylee-LNBY/UntitledError404",
        img: "public/untitled.png",
        }
    ];

  return (

    <div className="container">
      <a name="portfolio">&nbsp;</a>
      <div className="section">
        <div className="row">
          {
            projects.map((object) => (
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={object.img} />
                  </div>
                  <div className="card-content height-adj">
                    <h5>{object.name}</h5>
                    <p>{object.desciption}</p>
                  </div>
                  <div className="card-action">
                    <div className="row card-pd"
                      style={{ padding: "auto auto !important", margin: "auto auto !important" }}>
                      <div className="col s6 m12 l6">
                        <a href={object.github} class="card-link"
                          target="_blank">Github ></a>
                      </div>
                      <div className="col s6 m12 l6">
                        <a href={object.deployment} class="card-link"
                          target="_blank">deployment Site ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;