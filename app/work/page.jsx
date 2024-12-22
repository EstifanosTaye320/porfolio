"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    catagory: "fullstack",
    title: "Church Profile System",
    discription:
      "This system was made as a demo to a chruch profile managing system it has one feature profile and full CRUD",
    stack: [
      { name: "Nest.js" },
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/EstifanosTaye320/church-profile",
  },
  {
    num: "02",
    catagory: "mobile",
    title: "Video Game Cataloger Mobile",
    discription:
      "This was done as a group project for my Introduction to Mobile Application Development course",
    stack: [{ name: "Next.js" }, { name: "Flutter" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/hmyunis/flutter-2024-proj",
  },
  {
    num: "03",
    catagory: "fullstack",
    title: "DevScraper",
    discription:
      "This was done as a group project for Introduction to software engineering course",
    stack: [
      { name: "React.js" },
      { name: "Nest.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/funstesec2g2/dev-scrape",
  },
  {
    num: "04",
    catagory: "game",
    title: "Pong",
    discription:
      "This game was made in pygame to gain better understanding of the library, OOP in python and simple game logic",
    stack: [{ name: "Pygame" }, { name: "Python" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/EstifanosTaye320/pong_game",
  },
  {
    num: "05",
    catagory: "game",
    title: "Space Invadors",
    discription:
      "This game was made in pygame to gain better understanding of generateing objects based on conditions",
    stack: [{ name: "Pygame" }, { name: "Python" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/EstifanosTaye320/space_invadors",
  },
  {
    num: "06",
    catagory: "game",
    title: "Space Shooter",
    discription:
      "This game was made in pygame to gain better understanding of collision, animation, timers and sprites ",
    stack: [{ name: "Pygame" }, { name: "Python" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "https://github.com/EstifanosTaye320/space_shooter",
  },
  {
    num: "03",
    catagory: "mobile",
    title: "Mother's Day Card",
    discription:
      "This was done as an exercise using XML view configuration in udacity's Android Development Course",
    stack: [{ name: "XML" }, { name: "Kotline" }],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "https://github.com/EstifanosTaye320/mothersday-card",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slider index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slider index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/** outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/** project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transiton-all duration-500 capitalize">
                {project.catagory} project ({project.title})
              </h2>
              {/** project description */}
              <p className="text-white/60">{project.discription}</p>
              {/** stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/** remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/** buttons */}
              <div className="flex items-center gap-4">
                {/** live project button */}

                {project.live ? (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {/** github repository button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/** overlay */}
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      {/** image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/** slider button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
