import Tile from "./components/Tile/Tile";
import style from "./Frame.module.css";

export default function Frame() {
  return (
    <figure className={style.Frame}>
      {Array.from({ length: 60 }, () => RandomTile())}
    </figure>
  );
}

function RandomTile() {
  const type = ["arc", "match", "triangle"][Math.floor(Math.random() * 3)];
  const arc = ["bl", "br", "tl", "tr"][Math.floor(Math.random() * 4)] as any;
  const triangle = ["bl", "tl", "tr", "br"][
    Math.floor(Math.random() * 4)
  ] as any;
  const color = ["navy", "dark-brown", "orange", "tangerine", "tomato"][
    Math.floor(Math.random() * 5)
  ] as any;
  const match = ["top", "right", "bottom", "left"][
    Math.floor(Math.random() * 4)
  ] as any;

  switch (type) {
    case "arc":
      return <Tile arc={arc} color={color} />;
    case "match":
      return <Tile match={match} color={color} />;
    case "triangle":
      return <Tile triangle={triangle} color={color} />;
  }
}
