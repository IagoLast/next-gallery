import frameService from "./frame.service";

describe("frame.service", () => {
  describe(".generate()", () => {
    beforeEach(() => {
      jest.spyOn(global.Math, "random").mockReturnValue(0.1);
    });

    it("should generate a frame spec", () => {
      const def = frameService.generate({
        length: 2,
      });

      expect(def).toEqual({
        frames: [
          { type: "match", color: "navy", rotation: "top" },
          { type: "match", color: "navy", rotation: "top" },
        ],
      });
    });

    it("should preserve the given tiles in the generated spec", () => {
      const def = frameService.generate({
        length: 3,
        frames: {
          0: { type: "circle", color: "tangerine", rotation: "bottom" },
          2: { type: "triangle", color: "navy", rotation: "left" },
        },
      });

      expect(def).toEqual({
        frames: [
          { type: "circle", color: "tangerine", rotation: "bottom" },
          { type: "match", color: "navy", rotation: "top" },
          { type: "triangle", color: "navy", rotation: "left" },
        ],
      });
    });
  });
});
