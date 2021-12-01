import { useState } from "react";
import Tile from "./components/Tile/Tile";
import style from "./Frame.module.css";
import frameService, { ITileSpec } from "./frame.service";

const FRAME_LENGTH = 60;

export default function Frame() {
  const [state, setState] = useState(() => ({
    frozenTiles: {},
    length: FRAME_LENGTH,
    spec: frameService.generate({ length: FRAME_LENGTH }),
  }));

  function setLength(e: React.ChangeEvent<HTMLInputElement>) {
    const length = parseInt(e.target.value, 10);
    setState((prevState) => ({
      ...prevState,
      length,
      spec: frameService.generate({ length }),
    }));
  }

  function regenerate() {
    setState((s) => ({
      ...s,
      spec: frameService.generate({
        length: s.length,
        frames: state.frozenTiles,
      }),
    }));
  }

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
      <div>
        <input
          type="range"
          min="4"
          max="240"
          step="1"
          value={state.length}
          onChange={setLength}
        />
        <button onClick={regenerate}> RANDOM </button>
      </div>
    </>
  );
}
