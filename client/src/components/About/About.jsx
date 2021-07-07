import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h1 className="about__title">About</h1>
        <p className="about__text">
          This app is a Full Stack MERN App that have some CRUD functionalities
          like: Create todo, Update todo and Delete todo. It's simply built with
          some awesome technologies such as: Express which is a famous Node.js
          framework, React which is a famous JavaScript library, MongoDB for
          storing and manipulating the database, and more technologies used to
          build this app.
        </p>
      </div>
    </div>
  );
};

export default About;
