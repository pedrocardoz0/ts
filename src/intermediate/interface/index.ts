interface Point2DInterface {
    x: number;
    y: number;
}

interface Point3DInterface extends Point2DInterface {
    z: number;
}
interface Point3DInterface {
    g: string;
}

const object3D: Point3DInterface = {
    x: 10,
    y: 20,
    z: 30,
    g: "1",
};

interface MatchOption {
    /**
     * @default "A"
     */
    options?: "A" | "B" | "C";
}
