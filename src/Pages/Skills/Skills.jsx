import PageTitle from "../../SharedPages/PageTitle/PageTitle";
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import "./Skills.css"
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const data = [
    {
      label: "HTML",
      icon: <BsFiletypeHtml />,
      value: "HTML",
      desc: `HTML (HyperText Markup Language) is the standard markup language used for creating the structure and presentation of web pages. It provides a set of predefined tags (elements) that are used to define the different parts of a web page, such as headings, paragraphs, links, images, tables, and more.`,
    },
    {
      label: "CSS",
      value: "CSS",
      icon: <BsFiletypeCss />,
      desc: `CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and visual appearance of HTML (or XML) documents. It provides a set of rules that define how elements should be displayed on a web page.`,
    },

    {
      label: "JAVASCRIPT",
      value: "JAVASCRIPT",
      icon: <SiJavascript />,
      desc: `JavaScript is a high-level, interpreted programming language primarily used for adding interactivity and dynamic behavior to websites. It is a versatile language that can be executed on the client-side (in the web browser) as well as on the server-side (with the help of server-side frameworks).`,
    },

    {
      label: "TAILWIND",
      value: "TAILWIND",
      icon: <SiTailwindcss />,
      desc: `It seems there might be a typographical error in your question. However, based on the context, I assume you are referring to "Tailwind CSS" rather than Tailwind. Tailwind CSS is a popular utility-first CSS framework that allows developers to rapidly build responsive and customizable web interfaces. It provides a set of pre-built CSS classes that can be applied directly to HTML elements to style and layout them.`,
    },

    {
      label: "BOOTSTRAP",
      value: "BOOTSTRAP",
      icon: <SiBootstrap />,
      desc: `Bootstrap is a popular open-source front-end framework used for building responsive and mobile-first websites and web applications. It provides a collection of HTML, CSS, and JavaScript components and utilities that simplify the process of creating visually appealing and functional user interfaces.`,
    },
    {
      label: "REACT",
      value: "REACT",
      icon: <SiReact />,
      desc: `React is an open-source JavaScript library for building user interfaces. It is developed and maintained by Facebook and a community of developers. React is commonly used for creating interactive and dynamic web applications.`,
    },
    {
      label: "NODE",
      value: "NODE",
      icon: <SiNodedotjs />,
      desc: `
      Node.js, commonly referred to as Node, is an open-source, server-side JavaScript runtime environment. It allows developers to run JavaScript code outside of a web browser, making it possible to build server-side applications using JavaScript.`,
    },
    {
      label: "EXPRESS",
      value: "EXPRESS",
      icon: <BsFiletypeHtml />,
      desc: `Express.js, commonly known as Express, is a fast and minimalist web application framework for Node.js. It provides a set of features and tools for building web applications and APIs using Node.js.`,
    },
    {
      label: "MONGODB",
      value: "MONGODB",
      icon: <SiExpress />,
      desc: `
      MongoDB is a popular open-source NoSQL (non-relational) database management system. It is designed to store and manage large volumes of unstructured and semi-structured data in a flexible and scalable manner.`,
    },
  ];
  return (
    <div id="skills" className="mb-20">
      <PageTitle title="Skills"></PageTitle>

      <Fade direction="left" duration={1500} triggerOnce={true}>
        <div className="bg-[#DDE6ED] px-10 py-10">
          <Tabs id="custom-animation" value="HTML">
            <TabsHeader className="bg-transparent">
              {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value}>
                  <span className="font-semibold flex flex-col items-center">
                    <span className="text-[24px] text-light-blue-600">
                      {icon}
                    </span>
                    {label}
                  </span>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </Fade>

     

    </div>
  );
};

export default Skills;
