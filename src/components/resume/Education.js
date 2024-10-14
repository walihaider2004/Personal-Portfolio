import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS(CS)"
            subTitle="The Isalamia Universty Of Bhawalpur (2022 - 2026(Expected))"
            result="3.65/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="ICS"
            subTitle="Aspire Collage Mian Chanu (2020 - 2022)"
            result="940/1100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle=" Secondary School (2018 - 2020)"
            result="970/1100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Leads Generationr"
            subTitle="Ali Tech Solutions Bhawalpur - (2022-2023)"
            result="Pakistan"
            des="Experienced in digital marketing and lead generation, specializing in targeted campaigns, SEO, and analytics to drive customer acquisition and growth.."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="E-Lance Bhawalpur - (2023-2024)"
            result="Pakistan"
            des="Skilled web developer and trainer with expertise in creating responsive websites, mentoring teams, and delivering hands-on coding workshops."
          />
          <ResumeCard
            title="Mern Stack Developer"
            subTitle="Codes Thinker Bhawalpur - (2024-Present)"
            result="Pakistan"
            des="TProficient MERN Stack Developer with expertise in building full-stack web applications using MongoDB, Express.js, React, and Node.js"
          />
        </div> */}
      </div>
    </motion.div>
  );
}

export default Education