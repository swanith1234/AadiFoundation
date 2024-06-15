/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Amazon Clone🎉",
    description:
      "It's my projectdevloped using html,css and javascript",
    url: "https://swanith1234.github.io/Amazon.com-clone/",
  },
  {
    title: "React Admin Panel",
    description:
      "its an Admin panel that used to track the products and orders in an ecommerce website",
    url: "https://swanith1234.github.io/React-Admin-Panel/",
  },
  {
    title: "My Resume Site",
    description:
      "This is my first portfolio created with basic level of animations",
    url: "https://swanith1234.github.io/Portfolio/",
  },
  {
    title: "NewsMonkey App",
    description:
      "Its a realtime news displaying website developed using API,but I didn't upload it in github since I didn't  learn how to upload a react project and get a url in github  ",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
          id="portfolio-img"
            src="https://shorturl.at/Do1Cp"
            style={{ height: "400px", width: "520px", objectFit: "cover", marginLeft:"10px",  animation: "1s ease-out 3s 1 slideInLeft"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
