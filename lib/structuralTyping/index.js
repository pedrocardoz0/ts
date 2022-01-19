"use strict";
let point2D = { x: 10, y: 20 };
let point3D = { x: 30, y: 40, z: 50 };
// Duck Typing;
point2D = point3D;
function takePoint2D(point) { }
takePoint2D(point2D);
point3D = point2D;
function takePoint3D(point) { }
takePoint3D(point2D);
