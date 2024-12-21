"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description: "Design and implementation of UI and optimization of UX",
    href: "https://www.youtube.com/watch?v=CgkZ7MvWUAA&ab_channel=BroCode",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Creation of features with full CRUD functionality and optimization",
    href: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU",
  },
  {
    num: "03",
    title: "Game Development",
    description:
      "Creating of the front-side and back-side logic for 2D and 3D games",
    href: "https://www.youtube.com/watch?v=8OMghdHP-zs&t=15314s&ab_channel=ClearCode",
  },
  {
    num: "04",
    title: "Mobile Development",
    description:
      "Use of frameworks like Flutter and Jetpack Compose to make mobile apps",
    href: "https://www.youtube.com/watch?v=1ukSR1GRtMU&list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ&ab_channel=NetNinja",
  },
  {
    num: "05",
    title: "Python Programming",
    description:
      "Learning pythong from basics to intermediate level and beyond",
    href: "https://www.youtube.com/watch?v=nLRL_NcnK-4&t=1s&ab_channel=freeCodeCamp.org",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/** top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/** title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/** description */}
                <p className="text-white/60">{item.description}</p>
                {/** border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
