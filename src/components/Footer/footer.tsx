import { ItemsFooter } from "../../data/items-footer";

import { AppleLogo, WindowsLogo, LinuxLogo } from "phosphor-react";

import LogoBattleNet from "../../assets/logo-battle-net.png";
import Cellphone from "../../assets/icons/cellphone.svg";

const os = ["Windows", "Linux", "Mac"];

export default function Footer() {
  const system = os.find((system) => navigator.userAgent.includes(system));

  console.log(system);

  return (
    <footer className="bg-footer bg-cover bg-no-repeat w-full h-[852px] flex sm:flex-col md:flex-row items-center justify-end gap-20 px-14 xs:pt-12">
      <div className="">
        <img
          src={LogoBattleNet}
          alt="Logo da Battle.net"
          className="h-4 w-[133.22px] mb-8"
        />
        <h2 className="text-3xl text-white font-bold mb-8 ">
          Baixe agora o battle.net
        </h2>
        <ul className="flex flex-col gap-6 mb-10  ">
          {ItemsFooter.map((item, index) => (
            <li key={index} className="flex gap-4 text-gray font-light text-lg">
              <img src={item.icon} alt={item.alt} />
              {item.content}
            </li>
          ))}
        </ul>

        <button className="py-4 px-8 text-white bg-blue w-65 rounded flex gap-2 items-center justify-center font-semibold text-base mb-12 ">
          {system === "Windows" && (
            <>
              <WindowsLogo size={20} />
              Baixar para o {system}
            </>
          )}
          {system === "Mac" && (
            <>
              <AppleLogo size={20} />
              Baixar para o {system}
            </>
          )}
          {system === "Linux" && (
            <>
              <LinuxLogo size={20} />
              Baixar para o {system}
            </>
          )}
        </button>

        <div className="flex items-center gap-4 ">
          <img src={Cellphone} alt="Ícone de telefone" />
          <p className="w-60 text-white-600 font-semibold text-sm">
            Também disponível como{" "}
            <span className="underline cursor-pointer">aplicativo móvel</span>
          </p>
        </div>
      </div>
      <div className="md:w-[71.563rem] h-full bg-footer-app bg-cover bg-no-repeat xs:w-[80%]"></div>
    </footer>
  );
}
