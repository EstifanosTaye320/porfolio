"use client";

import { motion } from "framer-motion";
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

const projects = [
  {
    num: "01",
    catagory: "frontend",
    title: "project 1",
    discription:
      "Lorem ipsom dolor sit amet consctetur adipisicing elit. cupiditate mgnam mondi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    catagory: "frontend",
    title: "project 1",
    discription:
      "Lorem ipsom dolor sit amet consctetur adipisicing elit. cupiditate mgnam mondi.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    catagory: "fullstack",
    title: "project 3",
    discription:
      "Lorem ipsom dolor sit amet consctetur adipisicing elit. cupiditate mgnam mondi.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  return <div>Work page</div>;
};

export default Work;
