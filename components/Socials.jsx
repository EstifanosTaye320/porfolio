import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/EstifanosTaye320" },
  {
    icon: <FaLinkedinIn />,
    path: "www.linkedin.com/in/estifanos-taye-24b917288",
  },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/Estifanos-Taye/" },
  // { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
