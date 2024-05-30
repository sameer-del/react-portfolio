import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Portfolio = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section
      className="min-h-[95vh] lg:min-h-[78vh] lg:px-[8rem] mt-[30px]"
      id="portfolio"
    >
      <h1 className="text-[40px] text-accent font-bold leading-[0.8] pt-[2rem] lg:text-[50px] text-center lg:p-2 ">projects</h1>
      <div className='mt-20'>
      <Slider {...settings}>
        {
          data.map((d)=>(
            <div className='card h-[450px]  text-black rounded-xl '>
              <div className=' h-[250px]'>
              <img className='rounded-t-xl px-3 pt-5'
            src={`${process.env.PUBLIC_URL}${d.img}`}
            alt={d.name}
            style={{ maxWidth: '100%', height: "100%" }}
          />
              </div>
              <div className='flex flex-col justify-center items-center w-full m-2 mx-auto gap-3  '>
              <h1 className='font-bold'>{d.name}</h1>
              <p className='text-[13px] max-w-[85%] mx-auto font-bold font-primary'>{d.review}</p>
              <div className='flex justify-betweenx '>
                <button className='btn font-heading w-[120px] lg:mr-16 rounded-xl px-6 py-1 text-black  pb-[8px]'><a href={d.git} target='blank'>github</a></button>
              <button className='btn font-heading w-[140px]  rounded-xl px-6  text-[13px] font-bold text-black '><a href={d.link} target='blank'>live demo</a></button>
              </div>
              </div>
              
              </div>
          ))
        }
      </Slider>
      </div>
      
      </section>
  )
}
const data = [{
  name:`personal portfolio`,
  review:` This portfolio highlights my proficiency in HTML, CSS, JavaScript, and React, and features a range of projects including dynamic web applications, responsive websites, and interactive user interfaces.`,
  img: '/projects/portfolio-img.png',
  link:"https://sameer-del.github.io/react-portfolio/",
  git:"https://github.com/sameer-del/react-portfolio",
},{
  name:`tic tac toe`,
  review:`the highlights of my portfolio is a classic Tic Tac Toe game, developed using HTML, CSS, and JavaScript. This project demonstrates my ability to create interactive and engaging web applications.`,
  img:"/projects/tic tac toe-img.jpg",
  link:"https://sameer-del.github.io/tic-tac-toe-game/",
  git:"https://github.com/sameer-del/tic-tac-toe-game",

},{
  name:`text to speech`,
  review:`I created a sophisticated Text-to-Speech (TTS) website designed to convert written text into natural-sounding speech. This project leverages advanced web technologies, including HTML, CSS, JavaScript.`,
  img:"/projects/text-to-speech.jpg",
  link:"https://sameer-del.github.io/Text-to-speech/",
  git:"https://github.com/sameer-del/Text-to-speech",
},{
  name:`islamic counter app`,
  review:`Developed an Islamic counter app using React to help users keep track of their daily prayers of thasfihu.enhancing the spiritual practice experience.  a smooth and responsive user experience.`,
  img:"/projects/islamic counter.jpg",
  link:"https://sameer-del.github.io/Islamic-counter-app/",
  git:"https://github.com/sameer-del/Islamic-counter-app",
},{
  name:`contact form`,
  review:`Developed a responsive and user-friendly contact form using HTML, CSS, and JavaScript. modern CSS for styling and JavaScript for dynamic interactions, providing a seamless and interactive user experience.`,
  img:"/projects/contact.png",
  link:"https://sameer-del.github.io/contact-form/",
  git:"https://github.com/sameer-del/contact-form",
}
];

export default Portfolio