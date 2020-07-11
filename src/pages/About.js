import React from "react";

function About() {
  return (
    <div>
      <body
        style={{
          backgroundColor: "#cddeee",
          textAlign: "center",
        }}
      >
        <p>
          Computers connect us all, but access to these connections and the
          quality of products found in software solutions varies greatly.
          Advancement of these solutions and the connection it creates between
          developer and client is what drove my desire to become a back-end
          developer. After graduating from ASU with a B.A. in Global Studies, I
          worked at my family’s business in social media and marketing, and then
          as policy administrator at a regional insurance company. After a few
          years, I decided to move to South Korea to teach English and leave a
          mark on the world by advancing the lifelong opportunities of children.
          This experience sparked my desire for a global career that would
          connect people and cultivate accessible, quality products and
          solutions. Thus began my deep dive into coding. Recently, I have been
          certified as a Full-Stack Developer by University of Arizona, where I
          gained knowledge in React, JavaScript, Node, SQL, and MongoDB. This
          arsenal of technical skills ties together strongly with my previous
          experiences.
        </p>
        <img
          src="https://images.unsplash.com/photo-1594091917763-420ab657d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2049&q=80"
          alt="fog"
          style={{
            borderRadius: "8px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        ></img>
      </body>
    </div>
  );
}

export default About;
