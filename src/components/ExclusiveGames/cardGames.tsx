interface CardGamesProps {
  name: string;
  category: string;
  image: string;
  logo: string;
}

export default function CardGames(props: CardGamesProps) {
  return (
    <div>
      <div
        className="h-[25.8rem] w-full flex items-end justify-center pb-12 overflow-hidden transition ease-in duration-[.2s] hover:scale-110 bg-cover "
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <img src={props.logo} alt="Logo do Game" />
      </div>
      <div className="flex flex-col gap-1 mt-6">
        <span className="font-semibold text-lg text-white-600">
          {props.name}
        </span>
        <span className="font-normal text-sm text-white-600 opacity-80">
          {props.category}
        </span>
      </div>
    </div>
  );
}
