"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about me
const about = {
  title: "About me",
  description: [
    "I am a fourth-year undergraduate student in Software Engineering at Addis Ababa Institute of Technology (AAiT), specializing in the software engineering stream.",
    "I love the very idea of graphics programming, animations and game programming that pulls them all together, but what I am really good at is logic research and documentation.",
    "I have cultivated a foundation in backend development technologies. I have gained experience with various programming languages like Python, and JavaScript, alongside Node.js, Express.js, and Nest.js.",
  ],
  info: [
    {
      fieldName: "Name",
      fieldValue: "Estifanos Taye",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+251) 925 353 945",
    },
    {
      fieldName: "Experience",
      fieldValue: "E2+ Years",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@elgeneral1",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ethiopian",
    },
    {
      fieldName: "Email",
      fieldValue: "estifanostaye1111@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Amharic, English",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have some expreience in Frontend, Backend, Game, and Mobile Development",
  items: [
    {
      company: "AAiT: DevScrapper",
      positon: "Frontend Developer",
      duration: "2nd Year 2nd semester 2023",
    },
    {
      company: "AAiT: Mobile-Video Game cataloger",
      positon: "Frontend Devloper",
      duration: "3rd Year 2nd semester 2024",
    },
    {
      company: "Personal: Quiz application",
      positon: "Front-End Devloper",
      duration: "Summer 2023",
    },
    {
      company: "Personal: Church profile system",
      positon: "Full-Stack Devloper",
      duration: "Summer 2023",
    },
    {
      company: "Personal: Pong Game",
      positon: "Game Developer",
      duration: "Summer 2023",
    },
    {
      company: "Personal: Space Invador",
      positon: "Game Developer",
      duration: "Summer 2023",
    },
    {
      company: "AAiT: Web-Video Game cataloger",
      positon: "Frontend/Backend Devloper",
      duration: "3rd Year 1st semester 2024",
    },

    {
      company: "Personal: Space Shooter",
      positon: "Game Developer",
      duration: "4th Year 1st Semester 2024",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I have takend may courses in my school and on online platforms",
  items: [
    {
      institution: "Cisco Networking Academy",
      degree: "Python Essentials 1",
      duration: "2023",
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Python Essentials 2",
      duration: "2023",
    },
    {
      institution: "AAiT",
      degree: "Introduction to software development",
      duration: "2023",
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Networking Essentials",
      duration: "2023",
    },
    {
      institution: "AAiT",
      degree: "Introduction to Networking",
      duration: "2023",
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Introduction to Packet Tracer",
      duration: "2023",
    },
    {
      institution: "Udacity",
      degree: "Introduction Android Development",
      duration: "2024",
    },
    {
      institution: "Udacity",
      degree: "Data Analysis with Python",
      duration: "2024",
    },
    {
      institution: "Udacity",
      degree: "Programming Fundumentals",
      duration: "2024",
    },
    {
      institution: "AAiT",
      degree: "Introduction to Web Development",
      duration: "2024",
    },
    {
      institution: "AAiT",
      degree: "Introduction to Mobile Application Development",
      duration: "2024",
    },
    {
      institution: "AAiT",
      degree: "Acadamic Integrity",
      duration: "2024",
    },
    {
      institution: "AAiT",
      degree: "How to evaluate resources",
      duration: "2024",
    },
    {
      institution: "AAiT",
      degree: "Goals to Manage Your Time",
      duration: "2024",
    },
  ],
};

// skills
const skills = {
  title: "My skills",
  description:
    "I have skills with may languages and technology due to my educational and personal projects",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

import { TabsContent, TabsTrigger, Tabs, TabsList } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/** content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.positon}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/** about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <div>
                  {about.description.map((par, index) => {
                    return (
                      <>
                        <p
                          key={index}
                          className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                        >
                          {par}
                        </p>
                        <br />
                      </>
                    );
                  })}
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
