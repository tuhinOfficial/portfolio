import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BiInfoCircle } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import Gallery from "./Gallery";

const DialogBox = ({ data }) => {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  console.log(data);
  const { projectName, title, features, technologies, images } = data;

  return (
    <Fragment>
      <div>
        <BiInfoCircle
          onClick={() => handleOpen("xxl")}
          size={30}
          className="text-light-blue-400 cursor-pointer"
        ></BiInfoCircle>
      </div>
      <Dialog open={size === "xxl"} size={size || "xxl"} handler={handleOpen}>
        <div className="max-w-6xl mx-auto w-full">
          <DialogHeader className="pb-0">{projectName} </DialogHeader>
          <span>{title}</span>
          <DialogBody className="flex mt-10">
            <div className="flex-1">
              <Gallery data ={images}></Gallery>
            </div>
            <div className="flex-1">
              <div className="mb-5">
                <span className="text-2xl underline font-bold text-[#000000]">
                  Features :{" "}
                </span>
                {features.map((feature) => (
                  <p className="flex gap-x-2 items-center">
                    <FcApproval size={20}></FcApproval>{" "}
                    <span className="font-semibold text-[#000000]">
                      {feature}
                    </span>
                  </p>
                ))}
              </div>
              <div>
                <span className="text-2xl underline font-bold text-[#000000]">
                  Technology :{" "}
                </span>
                <span className="text-[#000000] font-semibold">
                  {technologies}
                </span>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="outlined"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Back</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default DialogBox;
