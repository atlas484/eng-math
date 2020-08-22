export class Vector3D {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        // takes x, y, and z values and creates a 3d vector object
        this.x = x;
        this.y = y;
        this.z = z;
    }

    map(func: (n: number) => number): void {
        // MODIFIES OBJECT: evaluates the given function each of the vector's components
        const vals = this.toArray().map(func);
        this.x = vals[0];
        this.y = vals[1];
        if (!(this instanceof Vector2D)) {
            this.z = vals[2];
        }
    }
    magSq(): number {
        // returns the magnitude squared of the vector
        return (this.x ** 2) + (this.y ** 2) + (this.z ** 2);
    }
    mag(): number {
        // returns the magnitude of the vector
        return Math.sqrt(this.magSq());
    }
    set(v: Vector3D): void;
    set(v: Vector2D): void;
    set(x: number, y: number, z: number): void;
    set(x: any, y?: number, z?: number) {
        // MODIFIES OBJECT: overwrites the components of the vector
        if (x instanceof Vector3D || x instanceof Vector2D) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        } else if (typeof (x) == "number") {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
    add(v: Vector3D): void;
    add(v: Vector2D): void;
    add(x: number, y: number, z: number): void;
    add(x: any, y?: number, z?: number): void {
        // MODIFIES OBJECT: adds x, y, and z values to the vector components
        if (x instanceof Vector3D || x instanceof Vector2D) {
            this.x += x.x;
            this.y += x.y;
            this.z += x.z;
        } else if (typeof (x) == "number") {
            this.x += x;
            this.y += y;
            this.z += z;
        }
    }
    subtract(v: Vector3D): void;
    subtract(v: Vector2D): void;
    subtract(x: number, y: number, z: number): void;
    subtract(x: any, y?: number, z?: number): void {
        // MODIFIES OBJECT: subtracts the x, y, and z values from the vector components
        if (x instanceof Vector3D || x instanceof Vector2D) {
            this.x -= x.x;
            this.y -= x.y;
            this.z -= x.z;
        } else if (typeof (x) == "number") {
            this.x -= x;
            this.y -= y;
            this.z -= z;
        }
    }
    scale(scalar: number): void {
        // MODIFIES OBJECT: scales the vector by the given vector
        this.map((val: number): number => {
            return val * scalar;
        });
    }
    dot(v: Vector3D): number {
        // returns the dot product of this vector and the given vector
        return ((this.x * v.x) + (this.y * v.y) + (this.z * v.z));
    }
    cross(v: Vector3D): Vector3D {
        // returns the cross product of this vector and the given vector
        const x = (this.y * v.z) - (v.y * this.z);
        const y = (this.z * v.x) - (v.z * this.x);
        const z = (this.x * v.y) - (v.x * this.y);
        return new Vector3D(x, y, z);
    }
    setMagnitude(mag: number): void {
        // MODIFIES OBJECT: scales the vector to the given magnitude. Keeps the angle.
        this.scale(mag / this.mag());
    }
    normalize(): void {
        // MODIFIES OBJECT: sets the magnitude of the vector to 1. Keeps the angle.
        this.setMagnitude(1.0);
    }
    toArray(): Array<number> {
        // returns [x, y, z]
        return [this.x, this.y, this.z];
    }
    toString(): string {
        // returns "x,y,z"
        return this.toArray().toString();
    }
    copy(): Vector3D {
        // returns a new Vector3D object that has the same components
        return new Vector3D(this.x, this.y, this.z);
    }

    static add(v1: Vector3D, v2: Vector3D): Vector3D {
        // returns the sum of the two input vectors
        return new Vector3D(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    static subtract(v1: Vector3D, v2: Vector3D): Vector3D {
        // returns the difference of the two input vectors
        return new Vector3D(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    static zeroVector(): Vector3D {
        // returns a zero vector
        return new Vector3D(0, 0, 0);
    }
    static unit(v: Vector3D): Vector3D {
        // returns the unit vector of the input
        let unitV = v.copy();
        unitV.normalize();
        return unitV;
    }
    static randUnitVector(): Vector3D {
        // returns a random unit vector
        let v = new Vector3D(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
        return Vector3D.unit(v);
    }
    static randomVector(magnitude: number): Vector3D {
        // returns a random vector with the given magnitude
        let rand = Vector3D.randUnitVector();
        rand.scale(magnitude);
        return rand;
    }
    static fromArray(arr: Array<number>): Vector3D {
        // returns a vector with the components from the given array
        return new Vector3D(arr[0], arr[1], arr[2]);
    }
    static from2Dto3D(v: Vector2D): Vector3D {
        // returns the same vector but as a Vector3D object
        return new Vector3D(v.x, v.y, v.z);
    }

}

export class Vector2D extends Vector3D {
    constructor(x: number, y: number) {
        super(x, y, 0);
    }

    set(v: Vector2D): void;
    set(v: Vector3D): void;
    set(x: number, y: number): void;
    set(x: any, y?: number): void {
        // MODIFIES OBJECT: overwrites the components of the vector
        if (x instanceof Vector2D) {
            this.x = x.x;
            this.y = x.y;
        } else if (x instanceof Vector3D) {
            throw ("Cannot set an instance of Vector3D to a Vector2D");
        } else if (typeof (x) == "number") {
            this.x = x;
            this.y = y;
        }
    }
    add(v: Vector2D): void;
    add(v: Vector3D): void;
    add(x: number, y: number): void;
    add(x: any, y?: number) {
        // MODIFIES OBJECT: adds x and y values to the vector components
        if (x instanceof Vector2D) {
            this.x += x.x;
            this.y += x.y;
        } else if (x instanceof Vector3D) {
            throw ("Cannot add an instance of Vector3D to a Vector2D");
        } else if (typeof (x) == "number") {
            this.x += x;
            this.y += y;
        }
    }
    subtract(v: Vector2D): void;
    subtract(v: Vector3D): void;
    subtract(x: number, y: number): void;
    subtract(x: any, y?: number) {
        // MODIFIES OBJECT: subtracts the x and y values from the vector components
        if (x instanceof Vector2D) {
            this.x -= x.x;
            this.y -= x.y;
        } else if (x instanceof Vector3D) {
            throw ("Cannot add an instance of Vector3D to a Vector2D");
        } else if (typeof (x) == "number") {
            this.x -= x;
            this.y -= y;
        }
    }
    angle(): number {
        // returns the angle (radians) between the x axis and the line that goes from (0,0) to the point described by the vector. Range: [-pi, pi]
        return Math.atan2(this.y, this.x);
    }
    setAngle(angle: number): void {
        // MODIFIES OBJECT: sets the angle (radians) between the x axis and the vector. Magnitude stays constant.
        const mag = this.mag();
        this.set(Math.cos(angle) * mag, Math.sin(angle) * mag);
    }
    rotate(angle: number): void {
        // MODIFIES OBJECT: rotates the vector around the z axis by the given angle (radians)
        this.setAngle(this.angle() + angle);
    }
    toArray(): Array<number> {
        // returns [x, y]
        return [this.x, this.y];
    }
    copy(): Vector2D {
        // returns a new Vector2D object that has the same components
        return new Vector2D(this.x, this.y);
    }

    static add(v1: Vector2D, v2: Vector2D): Vector2D {
        // returns the sum of the two input vectors
        return new Vector2D(v1.x + v2.x, v1.y + v2.y);
    }
    static subtract(v1: Vector2D, v2: Vector2D): Vector2D {
        // returns the difference of the two input vectors
        return new Vector2D(v1.x - v2.x, v1.y - v2.y);
    }
    static zeroVector(): Vector2D {
        // returns a zero vector
        return new Vector2D(0, 0);
    }
    static randUnitVector(): Vector2D {
        // returns a random unit vector
        return Vector2D.randomVector(1);
    }
    static randomVector(magnitude: number): Vector2D {
        // returns a random vector with the given magnitude
        return Vector2D.fromRTheta(magnitude, Math.random() * Math.PI * 2);
    }
    static fromArray(arr: Array<number>): Vector2D {
        // returns a vector with the components from the given array
        return new Vector2D(arr[0], arr[1]);
    }
    static fromRTheta(magnitude: number, angle: number): Vector2D {
        // returns a vector with the given magnitude and angle
        return new Vector2D(magnitude * Math.cos(angle), magnitude * Math.sin(angle))
    }
    static fromAngle(angle: number): Vector2D {
        // returns a unit vector at the given angle
        return Vector2D.fromRTheta(1, angle);
    }
}
