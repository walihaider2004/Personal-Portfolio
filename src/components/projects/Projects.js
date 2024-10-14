import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
      data-aos="fade-right"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Softwere House Company"
          des=" A detailed breakdown of all the services offered, with each service having a dedicated section explaining the benefits and the technology stack we use"
          src={projectOne}
             liveLink="https://www.codingsfirst.com/"
     
          githubLink="https://github.com/username/repo1"  // GitHub repo link
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Forever Ecom Store is a modern and responsive e-commerce platform designed for seamless shopping experiences. Built with the latest web technologies"
          src={projectTwo}
          liveLink="http://muhammadali35.github.io/Forever-Ecom-Store"
          githubLink="https://github.com/username/repo2"
        />
        <ProjectsCard
          title="Softwere House Company"
          des=" A detailed breakdown of all the services offered, with each service having a dedicated section explaining the benefits and the technology stack we use"
          src={projectThree}
        liveLink="https://codesthinker.com/"  // Link to the live project
          githubLink="https://github.com/username/repo3"
        />
        {/* Repeat similar cards */}
      </div>
    </section>
  );
};

export default Projects;
