import cn from "classnames";
import { ITileColor, ITileRotation, ITileType } from "../../frame.service";
import style from "./Tile.module.css";
interface ITileProps {
  onClick?: () => void;
  type: ITileType;
  color: ITileColor;
  rotation: ITileRotation;
  isLocked?: boolean;
}

export default function Tile(props: ITileProps) {
  return (
    <div
      onClick={props.onClick}
      className={cn({
        [style.Tile]: true,
        [style[`--${props.type}-${props.rotation}`]]: true,
        [style[`--color-${props.color}`]]: true,
        [style[`--locked`]]: props.isLocked,
      })}
    ></div>
  );
}
