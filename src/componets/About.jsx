import img from "../assets/img/service.png";

const About = () => {
  return (
    <div className="main_about">
        <h1>About page</h1>
      <div className="about">
        <div className="about-img">
          <img src={img} alt="" />
        </div>
        <div className="about-title">
          <h1>This is about title</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
