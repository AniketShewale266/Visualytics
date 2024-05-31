import React from "react";

function About() {
  return (
    <div className="py-16 bg-black">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-white font-bold md:text-4xl">
              AI-Driven Insights and Data Visualization.
            </h2>
            <p className="mt-6 text-white">
              We are a team of four dedicated final-year students working on an
              exciting project titled "AI-Driven Insights and Data
              Visualization." Our team members, Akshay Bhor, Ujwala Sangale,
              Aniket Shewale, and Abhishek Sinha, have collaboratively developed
              an application that harnesses the power of AI to provide
              insightful data analysis and visualizations.
            </p>
            <p className="mt-4 text-white">
              Throughout this project, we have combined our skills and knowledge
              to create a user-friendly platform that makes data analysis
              accessible and intuitive. Our collective efforts have resulted in
              a comprehensive solution that helps users gain valuable insights
              from their data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
