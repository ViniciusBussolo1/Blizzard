
import LogoBlizzard from "/logo-blizzard.png"; 
import LogoBattleNet from "/logo-battle-net.png";
import BgModal from "/bg-modal.png";

import IconGame4 from "/banner-hero/icons/game-4.png";
import IconGame5 from "/banner-hero/icons/game-5.png";

import AppleLogo from "/modal/apple.svg";
import FacebookLogo from "/modal/facebook.svg";
import GoogleLogo from "/modal/google.svg";

import { Games } from "../../data/games";
import { Game } from "../../types/game";

import { User, Play, CaretDown, X } from "phosphor-react";
import { useState } from "react";

import MenuLateral from "../Menu/menuLateral";
import MenuHorizontalGame from "../Menu/menuHorizontalGame";
import MenuHorizontalSports from "../Menu/menuHorizontalSports";

export default function BannerHero() {
  const [game, setGame] = useState<Game>(Games[0]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpenGame, setIsOpenGame] = useState(false);
  const [isOpenSports, setIsOpenSports] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function changeGame(gameIndex: number) {
    setGame(Games[gameIndex]);
  }

  function isModalOpen() {
    const modal = document.querySelector("dialog");

    modal?.showModal();
  }

  function modalClose() {
    const modal = document.querySelector("dialog");

    modal?.close();
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="h-[46rem] bg-no-repeat bg-cover transition-all duration-700 px-7"
      style={{ backgroundImage: `url(${game.image})` }}
    >
      <header className="h-24 w-full border-b-[1.5px] border-solid border-white border-opacity-10 ">
        <div className="max-w-[1327px] h-full mx-auto flex items-center justify-between md:gap-4 px-2">
          <div className="flex h-full items-center justify-between gap-24 z-10 ">
            <img
              src={LogoBlizzard}
              alt="Logo da Blizzard"
              className="h-10 w-[7.188rem] cursor-pointer"
            />

            <nav className="flex items-center justify-between gap-6 he:flex xs:hidden">
              <ul
                className="text-white text-base flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => {
                  setIsOpenGame(!isOpenGame);
                }}
              >
                Jogo
                <CaretDown
                  width={16}
                  height={16}
                  className={`transition ease-in duration-[250ms] ${
                    isOpenGame && "rotate-180 text-blue"
                  } `}
                />
              </ul>
              <ul
                className="text-white text-base flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => {
                  setIsOpenSports(!isOpenSports);
                }}
              >
                Esportes
                <CaretDown
                  width={16}
                  height={16}
                  className={`transition ease-in duration-[250ms] ${
                    isOpenSports && "rotate-180 text-blue"
                  }  `}
                />
              </ul>
              <ul className="text-white text-base cursor-pointer">Loja</ul>
              <ul className="text-white text-base cursor-pointer">Notícias</ul>
              <ul className="text-white text-base cursor-pointer">Suporte</ul>
            </nav>

            {isOpenGame && (
              <MenuHorizontalGame
                onMouseLeave={() => {
                  setIsOpenGame(!isOpenGame);
                }}
              />
            )}

            {isOpenSports && (
              <MenuHorizontalSports
                onMouseLeave={() => {
                  setIsOpenSports(!isOpenSports);
                }}
              />
            )}
          </div>

          <div className="flex items-center justify-between gap-4 z-10">
            <button className="text-white flex text-sm py-[10px] px-4 border-solid border-[0.788462px] border-white rounded transition ease-in duration-700 hover:bg-white hover:text-black">
              Criar conta
            </button>
            <button
              className="bg-blue py-[10px] px-[25.2308px] rounded flex items-center justify-center gap-[6px] text-sm text-white"
              onClick={isModalOpen}
            >
              <User size={16} /> Logar
            </button>
          </div>

          <dialog
            className="h-[600px] w-[696px] rounded bg-cover border-none bg-black"
            style={{ backgroundImage: `url(${BgModal})` }}
          >
            <div className="h-full w-full flex flex-col justify-start items-center">
              <div className="w-full flex justify-end pr-6 ">
                <X
                  width={30}
                  height={30}
                  color="#127CE0"
                  className="cursor-pointer"
                  onClick={modalClose}
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-8 ">
                <img
                  src={LogoBattleNet}
                  alt="Logo da Battle-net"
                  width={166.53}
                  height={20}
                  className="mb-10 text-blue"
                />
                <form className="w-[426px] flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="E-mail ou telefone"
                    className="font-medium text-sm placeholder:text-neutral-700 placeholder:opacity-60 rounded py-3 px-4"
                  />
                  <input
                    type="text"
                    placeholder="Senha"
                    className="font-medium text-sm placeholder:text-neutral-700 placeholder:opacity-60 rounded py-3 px-4"
                  />
                  <button className="text-white bg-blue text-center text-base font-semibold py-4 rounded mt-3">
                    Conectar-se
                  </button>
                </form>
                <div className="mt-10 text-center text-sm font-medium text-white flex flex-col gap-4">
                  <span>ou conecte-se com</span>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded cursor-pointer">
                      <img src={GoogleLogo} alt="Ícone da Google" />
                    </div>
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded cursor-pointer">
                      <img src={AppleLogo} alt="Ícone da Apple" />
                    </div>
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded cursor-pointer">
                      <img src={FacebookLogo} alt="Ícone da Facebook" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-9 gap-4">
                  <p className="font-medium text-base text-white">
                    <span className="underline cursor-pointer text-blue">
                      Crie uma conta
                    </span>{" "}
                    Battle.net de graça
                  </p>
                  <span className="font-medium text-base text-blue cursor-pointer underline">
                    Não consegue logar?
                  </span>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </header>
      <section className="max-w-[1327px] h-[40rem] mx-auto flex items-center ">
        <div className="h-[29.688rem] w-full flex items-center justify-between ">
          <div className="flex w-[802px] items-center justify-between h-full he:flex-row xs:flex-col-reverse">
            <div className="flex xs:flex-row he:flex-col xs:w-full he:w-12 xs:justify-start xs:pl-4 he:pl-0 he:justify-center items-center gap-5  he:mt-10">
              {Games.map((gameItem, index) => (
                <div key={index}>
                  <MenuLateral
                    src={gameItem.icon}
                    alt={gameItem.alt}
                    isActive={selectedItem === index}
                    onClick={() => {
                      changeGame(index);
                      setSelectedItem(index);
                    }}
                  />
                </div>
              ))}
              <img
                src={IconGame4}
                alt="Ícone do Diablo "
                className="mix-blend-luminosity"
              />
              <img
                src={IconGame5}
                alt="Ícone do StarCraft II"
                className="mix-blend-luminosity"
              />
            </div>

            <div className="max-w-[35.125rem] h-[21.25rem] xs:pl-4 lg:pl-0">
              <h1 className="text-[3.6rem] leading-[110.2%] text-white font-bold">
                {game.title}
              </h1>
              <p className="text-lg mt-4 font-normal text-white tracking-tighter">
                {game.subTitle}
              </p>
              <button className="mt-8 bg-blue rounded py-4 px-8 text-center text-white flex items-center justify-center gap-[6px]">
                <User size={20} /> {game.textButton}
              </button>
            </div>
          </div>
          <div className="h-full flex flex-col justify-between  ">
            <img src={game.logo} alt="Logo do Diablo" />
            <div className="flex flex-col items-end gap-4">
              <span className="font-semibold text-xs text-white uppercase">
                Assista o trailer
              </span>
              <div
                className="w-[17.5rem] h-[9.875rem] flex justify-center items-center cursor-pointer hover:bg-diablo-animation hover:bg-cover transition-all duration-700"
                style={{
                  backgroundImage: isHover
                    ? `url(${game.animation})`
                    : `url(${game.animationCover})`,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[3.188rem] h-[3.188rem] bg-black rounded-[159px] opacity-70 flex items-center justify-center text-blue ">
                  <Play color="#00AEFF" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
