import ProjectSingle from "./ProjectSingle";
import "../../styles/projects/projects.css";
import quizizzImg from "../../assets/quizizzSS.jpg";
import netflixImg from "../../assets/netflixSS.jpg";
import moviesImg from "../../assets/moviesSS.jpg";
import quotesImg from "../../assets/quotesSS.jpg";

const projectsData = [
  {
    title: "Quizizz",
    tech: "React, TypeScript, Redux, Firebase, CSS, Html",
    description:
      "App based off of the Quizizz website. Build a quiz or take a pre built quiz using the Open Trivia Database api. Optimized for mobile devices first.",
    image: quizizzImg,
    liveSite: "https://quizizz-by-justin.netlify.app/",
    githubRepo: "https://github.com/justincueva02/Quizizz",
  },
  {
    title: "Netflix Landing Page",
    tech: "Html, CSS, JavaScript, React Components",
    description: "1:1 of the Netflix Landing Page",
    image: netflixImg,
    liveSite: "https://netflix-landing-page-by-justin.netlify.app/",
    githubRepo: "https://github.com/justincueva02/netflix-landing-page",
  },
  {
    title: "Movies",
    tech: "React, Redux, Javascript, TypeScript, CSS, Html",
    description: "A responsive movie gallery that consumes the IMDB api.",
    image: moviesImg,
    liveSite: "https://movies-by-justin.netlify.app/",
    githubRepo: "https://github.com/justincueva02/movies",
  },
  {
    title: "Random Quote Generator",
    tech: "React, Redux, Javascript, TypeScript, CSS, Html, Firebase",
    description:
      "Generates random advice using the advice slip api. Optimized for mobile devices first.",
    image: quotesImg,
    liveSite: "https://quote-generator-by-justin.netlify.app/",
    githubRepo: "https://github.com/justincueva02/quotes",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="red">projects</span>
          </h1>
          <ul className="project__list">
            {projectsData.map((projectData, index) => {
              return (
                <ProjectSingle
                  projectData={projectData}
                  key={index}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
