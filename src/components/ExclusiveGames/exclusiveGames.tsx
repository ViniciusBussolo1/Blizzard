import IconBLizzard from "/icons/blizzard.svg";
import IconSwitch from "/icons/switch.svg";
import IconXbox from "/icons/xbox.svg";
import IconPlaystation from "/icons/playstation.svg";
import IconMenu from "/icons/menu.svg";
import LogoBlizzard from "/logo-blizzard.png";

import { useEffect, useState } from "react";

import CardGames from "./cardGames";
import axios from "axios";

interface GamesProps {
  name: string;
  category: string;
  image: string;
  logo: string;
}

export default function ExclusiveGames() {
  const [games, setGames] = useState<GamesProps[]>([]);

  async function fetchGames() {
    const response = await axios.get(
      "https://api.brchallenges.com/api/blizzard/games"
    );
    setGames(response.data);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className="w-full bg-black pb-28 px-10">
      <div className="max-w-[1327px] mx-auto pt-24">
        <div className="w-full flex justify-between items-end md:gap-16">
          <div className="flex justify-between items-end sm:gap-16 md:gap-16 lg:gap-36 ">
            <h3 className="font-semibold text-base text-gray-700 uppercase mt-4 max-[836px]:hidden ">
              Games
            </h3>
            <span className="font-bold text-white text-3xl w-44 ">
              Jogos exclusivos
            </span>

            <div className="flex gap-6 h-5">
              <img
                src={IconBLizzard}
                alt="Ícone da Blizzard"
                className="cursor-pointer"
              />
              <img
                src={IconSwitch}
                alt="Ícone do Nintendo Switch"
                className="cursor-pointer"
              />
              <img
                src={IconXbox}
                alt="Ícone do Xbox"
                className="cursor-pointer"
              />
              <img
                src={IconPlaystation}
                alt="Ícone do Playstation"
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex gap-3 cursor-pointer">
            <img src={IconMenu} alt="Ícone de menu" />
            <span className="text-blue text-base font-semibold ">
              Ver todos os jogos
            </span>
          </div>
        </div>

        <div
          className="w-full mt-[87px] grid sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4 gap-12 "
        >
          {games.map((game) => (
            <CardGames
              key={game.name}
              name={game.name}
              category={game.category}
              image={game.image}
              logo={game.logo}
            />
          ))}
          <div>
            <div className="h-[25.8rem] flex justify-center items-center rounded border-solid border-2 border-[#212428] ">
              <div className="flex flex-col justify-center items-center gap-10 ">
                <img src={LogoBlizzard} alt="Logo da Blizzard" />
                <div className="flex gap-3 cursor-pointer">
                  <img src={IconMenu} alt="Ícone de menu" />
                  <span className="text-white text-lg font-semibold ">
                    Ver todos jogos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
