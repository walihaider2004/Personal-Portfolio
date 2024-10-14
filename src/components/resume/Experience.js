import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        {/* <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Digital Marketer"
            subTitle="Freelancing - (2021- Present)"
            result="Pakistan"
            des="Experienced in digital marketing, specializing FaceBook Ads Instagram Ads Google Ads, social media strategies, content creation, and data analytics to drive brand growth.p."
          />
          <ResumeCard
            title="Leads Generation"
            subTitle="Ali Tech Solutons - (2022-2023)"
            result="Pakistan"
            des="Leads generation expert with a proven track record in identifying prospects, nurturing relationships, and converting leads into loyal customersy."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="E-Lance Bhawalpur - (2023 - 2024)"
            result="Pakistan"
            des="Experienced Web Developer skilled in creating responsive, user-friendly websites, focusing on front-end and back-end development for seamless performance."
          />
        </div>
      </div>
      <div> */}
        {/* <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div> */}
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer && Trainer"
            subTitle="FreeLance Bahawalpur (2023 - 2024)"
            result="Pakistan"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="MernStack Developer and Instructor"
            subTitle="Codes Thinker  (April 2024; - September 2024)"
         result="Pakistan"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of cultur."
          />
          <ResumeCard
            title="MernStack Developer and Instructor"
            subTitle=" Codings First  (Present)"
          result="Pakistan"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of cultur."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
