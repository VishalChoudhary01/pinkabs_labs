import Card from "./component/Card";
import { useState,useEffect } from "react";
import { cardData } from "./constant/cardsData";
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData);
  }, []);
  return (
    <div className="relative w-full h-screen">
      <section className="absolute inset-0 w-full h-full -z-50 bg-[#f9fbfd]">
        <svg className="w-full h-full" viewBox="0 0 108 92" preserveAspectRatio="none">
          <polygon points="0,0 100,0 0,100" className="fill-[#2A1768]" />
          <polygon points="0,100 100,0 100,100" className="fill-[#f9fbfd]" />
        </svg>
      </section>

      <section className="relative z-10 w-full  h-full flex justify-center ">
        <div className="mx-auto w-[85%]  lg:py-[1vw] md:py-[2.5vw] py-[3vw]">
          <h2 className="text-white uppercase font-bold lg:text-[3vw] md:text-[5vw] text-[8vw] font-roboto tracking-wide lg:pb-[5vw] md:pb-[8vw] pb-[12vw]">
            Our Services
          </h2>
          <div className=" flex flex-wrap md:gap-y-[10vw] gap-y-[15vw] justify-center gap-x-[2.2vw]  py-[2vw]">
          {cards.map(card => (
        <Card 
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
