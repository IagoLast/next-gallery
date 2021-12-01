interface IGenerateArgs {
  length: number;
  frames?: Record<number, ITileSpec>;
}

interface IFrameSpec {
  frames: ITileSpec[];
}

export interface ITileSpec {
  type: ITileType;
  color: ITileColor;
  rotation: ITileRotation;
}

export type ITileType = "square" | "circle" | "triangle" | "match";
export type ITileColor =
  | "color-100"
  | "color-200"
  | "color-300"
  | "color-400"
  | "color-500";

export type ITileRotation = "top" | "right" | "bottom" | "left";

const frameService = {
  generate(args: IGenerateArgs): IFrameSpec {
    const spec = {
      frames: [],
    };

    for (let i = 0; i < args.length; i++) {
      const tile = frameService.generateRandomTile();
      spec.frames.push(tile);
    }

    if (args.frames) {
      for (const i in args.frames) {
        spec.frames[i] = args.frames[i];
      }
    }

    return spec;
  },

  generateRandomTile(): ITileSpec {
    const type = ["match", "square", "circle", "triangle"][
      Math.floor(Math.random() * 4)
    ] as ITileType;

    const color = [
      "color-100",
      "color-200",
      "color-300",
      "color-400",
      "color-500",
    ][Math.floor(Math.random() * 5)] as ITileColor;

    const rotation = ["top", "right", "bottom", "left"][
      Math.floor(Math.random() * 4)
    ] as ITileRotation;

    return { type, color, rotation };
  },
};

export default frameService;
