"use client";

import Arrows from "@/components/widgtes/arrows";
import SliderItem from "@/components/widgtes/slider-item";
import { useState } from "react";

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onPrev = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) setItemActive(countItems);
  };

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) setItemActive(1);
  };

  return (
    <div className="h-screen relative">
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image="/imgs/1.webp"
          brand="Dodge"
          name="Challenger"
          desc="Un SUV poderoso y todoterreno que ha ganado un lugar en los clásicos más populares del mundo."
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image="/imgs/2.webp"
          brand="Dodge"
          name="Camaro"
          desc="Un coupé deportivo que combina estilo y rendimiento, perfecto para los amantes de la velocidad."
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image="/imgs/3.webp"
          brand="Dodge"
          name="Charger"
          desc="Un sedán musculoso que ofrece potencia y tecnología avanzada, ideal para un viaje emocionante."
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image="/imgs/4.webp"
          brand="Jeep"
          name="Wrangler"
          desc="Un icónico todoterreno que ofrece capacidades excepcionales en cualquier terreno y aventura."
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image="/imgs/5.webp"
          brand="Dodge"
          name="Ram"
          desc="Una camioneta robusta y versátil, diseñada para el trabajo duro y la aventura al aire libre."
        />
      </ul>

      <Arrows onClickNext={onNext} onClickPrev={onPrev} />
    </div>
  );
}
