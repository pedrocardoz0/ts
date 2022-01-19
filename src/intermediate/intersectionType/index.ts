type Point2DCardinal = {
    x: number;
    y: number;
};

type Point3DCardinal = Point2DCardinal & { z: number };

type DefaultUser = {
    name: string;
    email: string;
};

type AdminUser = {
    role: "Admin" | "Superadmin";
} & DefaultUser;
