import { GameMenuItems } from "../../data/games-menu";
import { SubmenuGamesItems } from "../../data/submenu-games";

interface MenuHorizontalPropsGame {
  onMouseLeave: () => void;
}

export default function MenuHorizontalGame(props: MenuHorizontalPropsGame) {
  return (
    <div
      className="absolute top-0 left-0 -z-10 bg-black w-full h-[640px] flex flex-col justify-between items-center pt-36"
      onMouseLeave={props.onMouseLeave}
    >
      <div className="max-w-[1327px] grid grid-cols-6 grid-rows-2 gap-4 ">
        {GameMenuItems.map((game, index) => (
          <div
            key={index}
            className="h-44 w-44 flex items-center justify-center hover:bg-black-300 hover:rounded-lg cursor-pointer"
          >
            <li className="flex flex-col items-center text-center gap-2 ">
              <img src={game.image} alt={game.name} />
              <span className="text-gray font-medium text-sm w-[105px] text-center">
                {game.name}
              </span>
            </li>
          </div>
        ))}
      </div>
      <div className="bg-black-300 w-full h-[70px] flex items-center justify-center">
        <ul className="flex items-center justify-center gap-16">
          {SubmenuGamesItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3 ">
              <img src={item.image} alt="" width={item.width} />
              <a
                href="#"
                className="font-semibold text-white text-base text-center"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
