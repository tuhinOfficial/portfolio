import { Player } from "@lottiefiles/react-lottie-player";
import PageTitle from "../../SharedPages/PageTitle/PageTitle";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  return (
    <div id="about" className="mb-8 my-8">
      <PageTitle title="About"></PageTitle>

        <div  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease"  data-aos-anchor-placement="top-center" data-aos-mirror="true"  className="flex gap-x-10 items-center">
          <div className="w-[70%]">
            <div>
              <p className="text-justify text-[#333333bc] font-semibold text-[14px]">
                I am skilled web developer with 2 years of experience in the
                field. Proficient in HTML, CSS, JavaScript, React, Bootstrap,
                Tailwind CSS, and MongoDB, I Have a solid foundation in
                front-end and back-end technologies. With a keen eye for design
                and attention to detail, crafts visually appealing and
                responsive web applications that provide an exceptional user
                experience. From developing clean and semantic HTML structures
                to styling with CSS frameworks like Bootstrap and Tailwind,
                ensures the highest quality standards. Additionally, expertise
                in working with React to build dynamic and interactive user
                interfaces. Familiarity with MongoDB allows to handle data
                management effectively. I have passion for web development,
                continuous learning, and problem-solving skills make them a
                valuable asset in any development team.
              </p>
            </div>
          </div>

          <div className=" flex justify-center">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
        </div>
    </div>
  );
};

export default About;
