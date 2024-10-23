import { MdKeyboardArrowRight } from "react-icons/md";
import anime from 'animejs';

const Card = ({ title, description, image }) => {
    const handleMouseEnter = (e) => {
        const imgElement = e.currentTarget.querySelector('.card-image');
        anime({
          targets: imgElement,
          rotate: '+=360', 
          duration: 2000,  
          easing: 'linear', 
          complete: () => {
            anime({
              targets: imgElement,
              rotate: 0,
              duration: 0
            });
          }
        });
      };

  return (
    <section 
      onMouseEnter={handleMouseEnter} 
      className="relative cursor-pointer bg-[#FFFFFF] lg:w-[19vw] lg:h-[22vw] md:w-[35.5vw] md:h-[42vw] w-[55vw] h-[65vw] rounded shadow-2xl shadow-gray-400 hover:scale-105 transition-transform duration-300"
    >
      <div className="lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] h-[60px] w-[60px] lg:left-[35%] lg:-top-[15%] md:-top-[15%] md:left-[34%] -top-[10%] left-[35%] bg-white rounded-full border-4 border-[#2A1768] absolute">
        <img 
          className="card-image relative w-full p-2 h-full" 
          src={image} 
          alt={title} 
        />
      </div>
      <div className="text-center absolute lg:top-[18%] md:top-[14%] top-[18%] lg:px-[1.5vw] md:px-[2.5vw] px-[3vw]">
        <h2 className="text-[#363739] lg:pb-[1vw] md:pb-[1.5vw] pb-[3vw] font-poppins font-extrabold lg:text-[1.5vw] md:text-[2.5vw] text-[4.2vw]">{title}</h2>
        <p className="text-gray-700 font-semibold lg:text-[0.9vw] md:text-[2.2vw] text-[3vw] lg:pb-[1.5vw] md:pb-[2vw] pb-[3.5vw]">{description}</p>
        <div className="text-[#2A1768] font-semibold lg:text-[1.4vw] md:text-[2.4vw] text-[4.1vw] flex items-center justify-center">
          <p>EXPLORE THIS SERVICE</p>
          <MdKeyboardArrowRight className="lg:text-[1.5vw] text-[#2A1768]" />
        </div>
      </div>
    </section>
  );
};

export default Card;
