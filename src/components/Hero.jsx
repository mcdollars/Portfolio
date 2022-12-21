import React from "react";
import hero from "../assets/images/profil.png";
const Hero = () => {
  const social_media = [
    {icon:"logo-github",link:"https://github.com/owncodezs"},
    {icon:"logo-discord",link:"https://discord.com/users/its_mani#4196"},
    {icon:"logo-facebook",link:"#"},
    {icon:"logo-linkedin",link:"https://www.linkedin.com/in/manibharathi-m/"},
    {icon:"logo-codepen",link:"https://codepen.io/owncodezs"},
    {icon:"logo-twitter",link:"https://twitter.com/Mani02181917"},

  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Mani </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer <span style={{color: "white"}} > & </span> pen tester
          </h4>
          <button className="btn-primary mt-8"><a href="#contact"> Contact Me </a></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((i) => (
              <div
                key={i.icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              ><a href={i.link} target="_blank">

                <ion-icon name={i.icon}></ion-icon>
              </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
