import React, { useEffect } from "react";
import PageTitle from "../../SharedPages/PageTitle/PageTitle";
import { useState } from "react";
import img1 from "../../assets/Project/Desktop/homepage.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import DialogBox from "./DialogBox";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  console.log(projects);

  const handleOpen = () => setOpen(!open);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mb-20">
      <PageTitle title="My Projects"></PageTitle>

      <div className="flex justify-between">
        {projects.map((project) => (
          <Card className="flex-row w-full max-w-[28rem] max-h-[12rem] overflow-hidden rounded-none shadow-lg ">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-2/5 shrink-0 m-0 rounded-none"
            >
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                <a
                  data-lg-size="1406-1390"
                  className="gallery-item"
                  data-src={project?.image}
                >
                  <img className="img-responsive" src={project?.image} />
                </a>
              </LightGallery>
            </CardHeader>
            <CardBody className="p-0 pl-6 pt-6">
              <Typography variant="h4" color="blue" className="uppercase mb-1">
                {project?.projectName}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                {project?.title}
              </Typography>
              <div className="flex gap-x-5 pt-7">
                <Button
                  variant="outlined"
                  color="red"
                  size="sm"
                  className="rounded-none"
                >
                  Live Preview
                </Button>
                <Button variant="outlined" size="sm" className="rounded-none">
                  Github
                </Button>
              </div>
              <div className="inline-block absolute top-0 right-0">
                <DialogBox data = {project}></DialogBox>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
