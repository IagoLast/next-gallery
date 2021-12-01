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
          { type: "match", color: "color-100", rotation: "top" },
          { type: "match", color: "color-100", rotation: "top" },
        ],
      });
    });

    it("should preserve the given tiles in the generated spec", () => {
      const def = frameService.generate({
        length: 3,
        frames: {
          0: { type: "circle", color: "color-200", rotation: "bottom" },
          2: { type: "triangle", color: "color-300", rotation: "left" },
        },
      });

      expect(def).toEqual({
        frames: [
          { type: "circle", color: "color-200", rotation: "bottom" },
          { type: "match", color: "color-100", rotation: "top" },
          { type: "triangle", color: "color-300", rotation: "left" },
        ],
      });
    });
  });
});
