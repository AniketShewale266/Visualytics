import React from "react";
import "../App.css";
import user1 from '../assets/demo1.jpg';

const teamMembers = [
  {
    name: "Akshay Bhor",
    role: "Project Manager",
    description:
      "Bob coordinates the project activities and ensures timely delivery of milestones.",
    imageUrl: user1,
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    description:
      "John is responsible for developing the landing page and the user interface of our application.",
    imageUrl: "path/to/john-image.jpg",
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    description:
      "Jane works on the server-side logic and database management for our application.",
    imageUrl: "path/to/jane-image.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Data Scientist",
    description:
      "Alice handles the data analysis and visualization aspects using LIDA.",
    imageUrl: "path/to/alice-image.jpg",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="team-member-image"
            />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
