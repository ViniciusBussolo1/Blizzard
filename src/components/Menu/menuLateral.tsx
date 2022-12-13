interface MenuLateralProps {
  src: string;
  alt: string;
  onClick: () => void;
  isActive: boolean;
}

export default function MenuLateral(props: MenuLateralProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`cursor-pointer ${
        props.isActive ? "mix-blend-normal" : "mix-blend-luminosity"
      }`}
      onClick={props.onClick}
    />
  );
}
