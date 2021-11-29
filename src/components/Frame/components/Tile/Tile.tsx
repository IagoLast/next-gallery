import cn from "classnames";
import style from "./Tile.module.css";
interface ITileProps {
  type?: string;
  arc?: "bl" | "br" | "tl" | "tr";
  triangle?: "bl" | "tl" | "tr" | "br";
  color?: "navy" | "dark-brown" | "orange" | "tomato" | "tangerine";
  match?: "top" | "bottom" | "left" | "right";
}

export default function Tile(props: ITileProps) {
  return (
    <div
      className={cn({
        [style.Tile]: true,
        [style[`--arc-${props.arc}`]]: !!props.arc,
        [style[`--triangle-${props.triangle}`]]: !!props.triangle,
        [style[`--match-${props.match}`]]: !!props.match,
        [style[`--color-${props.color}`]]: !!props.color,
      })}
    ></div>
  );
}
