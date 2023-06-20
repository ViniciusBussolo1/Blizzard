import { SubmenuSports } from "../../data/submenu-sports";
import IconTorneio from "/icons/torneio.svg";

interface MenuHorizontalSportsProps {
  onMouseLeave: () => void;
}

export default function MenuHorizontalSports(props: MenuHorizontalSportsProps) {
  return (
    <div
      className="absolute top-0 left-0 -z-10 bg-black w-full h-[640px] flex flex-col justify-between items-center pt-36"
      onMouseLeave={props.onMouseLeave}
    >
      <div className="max-w-[1327px] grid grid-cols-5 gap-16 pt-10">
        {SubmenuSports.map((game, index) => (
          <div
            key={index}
            className="h-[237px] w-44 flex items-center justify-center hover:bg-black-300 hover:rounded-lg cursor-pointer"
          >
            <li className="flex flex-col items-center text-center w-full h-full">
              <img src={game.image} alt={game.title} />
              <span className="text-gray font-medium text-sm w-[105px] text-center mt-6">
                {game.title}
              </span>
            </li>
          </div>
        ))}
      </div>
      <div className="bg-black-300 w-full h-[70px] flex items-center justify-center">
        <a
          href="#"
          className="text-white font-semibold text-base flex text-center gap-3"
        >
          <img src={IconTorneio} alt="Ícone de torneio" /> Torneio da Comunidade
        </a>
      </div>
    </div>
  );
}
