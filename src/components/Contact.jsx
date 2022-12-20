import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "owncodezs@gmail.com" ,link:"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hi+There&to=owncodezs@gmail.com&body=body+goes+here"},
    { logo: "logo-whatsapp", text: "+91 6385687966",link:"https://wa.me/6385687966?text=hay+Mani" },
    {
      logo: "location",
      text: "Erode",
      link:"https://www.google.com/maps/place/Erode,+Tamil+Nadu/@11.3466179,77.6453559,12z/data=!3m1!4b1!4m5!3m4!1s0x3ba96f46762f4671:0xd97da6e3d9c7f75e!8m2!3d11.3410364!4d77.7171642"
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <a href={contact.link} target="_blank">
                  <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    <ion-icon name={contact.logo}></ion-icon>
                  </div>
                </a>
                <a href={contact.link} target="_blank">
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
                </a>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
