import { Button } from "@material-tailwind/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import img from "../../../assets/img.png"
import file from "../../../assets/Tuhin Kanti Pal1.pdf"

const Banner = () => {

  const handleDownload = () =>{
    const pdfContent = "<h1>This Is Tuhin Kanti Pal Resume</h1>";
    const blob = new Blob([pdfContent] , {type : "application/pdf"});
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = file;

    link.click();

    URL.revokeObjectURL(url);
    link.remove();
  }

  return (
    <div
      id="/"
      className=" md:flex gap-x-24 pt-16  items-center w-[95%] mx-auto"
    >
      <div className="w-[70%]">
        <div className="space-y-4">
          <h2 className="text-3xl text-[#ff7f50] font-bold">
            <Fade delay={1e1} cascade damping={1e-1}>
              Tuhin Kanti Pal
            </Fade>
          </h2>
          <h4 className="text-xl font-bold text-light-blue-500">
            
            <Typewriter
              words={["Junior Web Developer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </h4>

          <div>
            <p className="text-[#333333bc] text-[14px] text-justify font-semibold w-full">
              <Typewriter
                words={[
                  "Skilled React developer proficient in HTML CSS JavaScriptTailwind CSS Bootstrap and MongoDB. Experienced in building dynamic and responsive web applications with a strong focus on clean code and optimal user experiences.",
                ]}
                loop={1}
                typeSpeed={50}
                delaySpeed={1500}
                onDelay={2000}
              />
            </p>
          </div>
          <div className="flex gap-x-4 ">
            <Zoom>
              <Button onClick={handleDownload} variant="outlined" className="flex items-center gap-3">
                Download Resume
              </Button>
            </Zoom>
            <Zoom duration={1500}>
              <Button variant="gradient" className="flex items-center gap-3">
                Hire Now
              </Button>
            </Zoom>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <Fade direction="down" duration={1500} triggerOnce={true}>
          {/*  */}
          <img src={img} alt="img" />
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
