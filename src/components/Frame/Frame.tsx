import { useEffect, useState } from "react";
import Tile from "./components/Tile/Tile";
import style from "./Frame.module.css";
import frameService, { ITileSpec } from "./frame.service";

const FRAME_LENGTH = 60;

export default function Frame() {
  const [state, setState] = useState(() => ({
    padding: 0,
    frozenTiles: {},
    length: FRAME_LENGTH,
    spec: frameService.generate({ length: FRAME_LENGTH }),
  }));

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        return setState((s) => ({
          ...s,
          spec: frameService.generate({
            length: s.length,
            frames: s.frozenTiles,
          }),
        }));
      }
      if (e.key == "ArrowUp") {
        return setState((s) => {
          console.warn(s.length);
          const length = s.length + 1;
          return {
            ...s,
            length,
            spec: frameService.generate({ length }),
          };
        });
      }

      if (e.key == "ArrowDown") {
        return setState((s) => {
          console.warn(s.length);

          const length = s.length - 1;
          return {
            ...s,
            length,
            spec: frameService.generate({ length }),
          };
        });
      }
      if (e.key == "ArrowRight") {
        return setState((s) => {
          document.body.style.setProperty("--padding", `${s.padding + 1}px`);
          return { ...s, padding: s.padding + 1 };
        });
      }
      if (e.key == "ArrowLeft") {
        return setState((s) => {
          document.body.style.setProperty("--padding", `${s.padding - 1}px`);
          return { ...s, padding: s.padding - 1 };
        });
      }
    });
  }, []);

  function freezeTile(args: { index: number; spec: ITileSpec }) {
    setState((s) => ({
      ...s,
      frozenTiles: {
        ...s.frozenTiles,
        [args.index]: { ...args.spec, isLocked: true },
      },
    }));
  }

  return (
    <>
      <figure className={style.Frame}>
        {state.spec.frames.map((spec, index) => {
          return (
            <Tile
              key={index}
              {...spec}
              onClick={() => freezeTile({ index, spec })}
            />
          );
        })}
      </figure>
      <footer className={style.Footer}>
        Press arrow keys if feeling creative
      </footer>
    </>
  );
}
