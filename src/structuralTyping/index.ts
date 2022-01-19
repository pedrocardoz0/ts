type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 10, y: 20 };
let point3D: Point3D = { x: 30, y: 40, z: 50 };

// Duck Typing;
point2D = point3D;
function takePoint2D(point: Point2D) {}
takePoint2D(point2D);

point3D = point2D;
function takePoint3D(point: Point3D) {}
takePoint3D(point2D);
