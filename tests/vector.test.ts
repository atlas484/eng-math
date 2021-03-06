import { expect } from 'chai';
import { Vector2D, Vector3D } from '../src/vector';

describe('Vector3D', function () {
    describe('map', function () {
        it('should apply the given function to all of the vectors components', function () {
            const testVector = new Vector3D(2, 3, 4);
            const result = new Vector3D(4, 9, 16);

            let square = (n: number) => n ** 2;
            testVector.map(square);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('magSq', function () {
        it('should return the magnitude squared of the vector', function () {
            const testVector = new Vector3D(3, 4, 12);
            expect(testVector.magSq()).equal(169);
        });
    });
    describe('mag', function () {
        it('should return the magnitude vector', function () {
            const testVector = new Vector3D(3, 4, 12);
            expect(testVector.mag()).equal(13);
        });
    });
    describe('set', function () {
        it('should set the vector to the given Vector3D object', function () {
            const testVector = new Vector3D(2, 3, 4);
            const result = new Vector3D(4, 9, 16);
            testVector.set(result);
            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should set the vector to the given Vector2D object', function () {
            const testVector = new Vector3D(2, 3, 4);
            const result = new Vector2D(4, 9);
            testVector.set(result);
            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should set the vector to the given 3 numbers', function () {
            const testVector = new Vector3D(2, 3, 4);
            const [x, y, z] = [12, 34, 664];
            testVector.set(x, y, z);
            expect(testVector.x).equal(x);
            expect(testVector.y).equal(y);
            expect(testVector.z).equal(z);
        });
    });
    describe('add', function () {
        it('should add the given Vector3D object to the vector', function () {
            const testVector = new Vector3D(2, 3, 4);
            const addVector = new Vector3D(3, 4, 5);
            const result = new Vector3D(5, 7, 9);

            testVector.add(addVector);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should add the given Vector2D object to the vector', function () {
            const testVector = new Vector3D(2, 3, 4);
            const addVector = new Vector2D(3, 4);
            const result = new Vector3D(5, 7, 4);

            testVector.add(addVector);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should add the given 3 numbers to the vector', function () {
            const testVector = new Vector3D(2, 3, 4);
            const [x, y, z] = [1, 2, 3];
            const result = new Vector3D(3, 5, 7);

            testVector.add(x, y, z);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('subtract', function () {
        it('should subtract the given Vector3D object to the vector', function () {
            const testVector = new Vector3D(2, 3, 4);
            const subVector = new Vector3D(3, 4, 5);
            const result = new Vector3D(-1, -1, -1);

            testVector.subtract(subVector);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should subtract the given Vector2D object to the vector', function () {
            const testVector = new Vector3D(2, 3, 4);
            const subVector = new Vector2D(3, 4);
            const result = new Vector3D(-1, -1, 4);

            testVector.subtract(subVector);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should subtract the given 3 numbers to the vector', function () {
            const testVector = new Vector3D(2, 3, 4);
            const [x, y, z] = [1, 2, 3];
            const result = new Vector3D(1, 1, 1);

            testVector.subtract(x, y, z);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('scale', function () {
        it('should scale all of the vectors components by the given scalar', function () {
            const testVector = new Vector3D(2, 3, 4);
            const result = new Vector3D(10, 15, 20);

            testVector.scale(5);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('dot', function () {
        it('should return the dot product of the vector and the given Vector3D objecy', function () {
            const testVector = new Vector3D(1, 2, 3);
            const dotVector = new Vector3D(4, 3, 2);
            expect(testVector.dot(dotVector)).equal(16);
        });
        it('should return the dot product of the vector and the given Vector2D objecy', function () {
            const testVector = new Vector3D(1, 2, 3);
            const dotVector = new Vector2D(4, 3);
            expect(testVector.dot(dotVector)).equal(10);
        });
    });
    describe('cross', function () {
        it('should return the cross product of the vector and the given Vector3D objecy', function () {
            const testVector = new Vector3D(1, 0, 0);
            const crossVector = new Vector3D(0, 1, 0);
            const expectedResult = new Vector3D(0, 0, 1);

            const result = testVector.cross(crossVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
        it('should return the dot product of the vector and the given Vector2D objecy', function () {
            const testVector = new Vector3D(1, 0, 0);
            const crossVector = new Vector2D(0, 1);
            const expectedResult = new Vector3D(0, 0, 1);

            const result = testVector.cross(crossVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });
    describe('setMagnitude', function () {
        it('should set the magnitude of the vector to the given number', function () {
            const testVector = new Vector3D(3, 4, 12);
            const result = new Vector3D(6, 8, 24);

            testVector.setMagnitude(26);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('normalize', function () {
        it('should set the magnitude of the vector to 1', function () {
            const testVector = new Vector3D(3, 4, 12);
            const result = new Vector3D(3 / 13, 4 / 13, 12 / 13);

            testVector.normalize();

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('toArray', function () {
        it('should return vector components as an array of 3 numbers', function () {
            const testVector = new Vector3D(3, 4, 12);
            const result = [3, 4, 12];
            const arr = testVector.toArray();

            expect(arr[0]).equal(result[0]);
            expect(arr[1]).equal(result[1]);
            expect(arr[2]).equal(result[2]);
        });
    });
    describe('toString', function () {
        it('should return vector components as a string', function () {
            const testVector = new Vector3D(3, 4, 12);
            expect(testVector.toString()).equal("3,4,12");
        });
    });
    describe('copy', function () {
        it('should return a new Vector3D with the same components', function () {
            const testVector = new Vector3D(2, 3, 4);
            const expectedResult = new Vector3D(2, 3, 4);
            const result = testVector.copy();

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });

    // testing static functions
    describe('static add', function () {
        it('should add the given Vector3D objects together', function () {
            const testVector = new Vector3D(2, 3, 4);
            const addVector = new Vector3D(3, 4, 5);
            const expectedResult = new Vector3D(5, 7, 9);

            const result = Vector3D.add(testVector, addVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
        it('should add the given Vector2D and 3D objects together', function () {
            const testVector = new Vector3D(2, 3, 4);
            const addVector = new Vector2D(3, 4);
            const expectedResult = new Vector3D(5, 7, 4);

            const result = Vector3D.add(testVector, addVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });
    describe('static subtract', function () {
        it('should subtract the given Vector3D objects', function () {
            const testVector = new Vector3D(2, 3, 4);
            const subVector = new Vector3D(3, 4, 5);
            const expectedResult = new Vector3D(-1, -1, -1);

            const result = Vector3D.subtract(testVector, subVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
        it('should add the given Vector2D and 3D objects', function () {
            const testVector = new Vector2D(2, 3);
            const subVector = new Vector3D(3, 4, -18);
            const expectedResult = new Vector3D(-1, -1, 18);

            const result = Vector3D.subtract(testVector, subVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });
    describe('static zeroVector', function () {
        it('should return a Vector3D with all zero components', function () {
            const testVector = Vector3D.zeroVector();

            expect(testVector.x).equal(0);
            expect(testVector.y).equal(0);
            expect(testVector.z).equal(0);
        });
    });
    describe('static unit', function () {
        it('should return a normalized version of the given vector', function () {
            const testVector = new Vector3D(3, 4, 12);
            const expectedResult = new Vector3D(3 / 13, 4 / 13, 12 / 13);
            const result = Vector3D.unit(testVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });
    describe('static randUnitVector', function () {
        it('should return a random unit vector', function () {
            const testVector = Vector3D.randUnitVector();
            expect(testVector instanceof Vector3D).equal(true);
            expect(testVector.mag()).equal(1);
        });
    });
    describe('static randomVector', function () {
        it('should return a random vector with the given magnitude', function () {
            const testVector = Vector3D.randomVector(12);
            expect(testVector instanceof Vector3D).equal(true);
            expect(Math.round(testVector.mag())).equal(12);
        });
    });
    describe('static fromArray', function () {
        it('should return a Vector3D with the components from the given array', function () {
            const arr = [1, 2, 3];
            const testVector = Vector3D.fromArray(arr);

            expect(testVector.x).equal(arr[0]);
            expect(testVector.y).equal(arr[1]);
            expect(testVector.z).equal(arr[2]);
        });
    });
    describe('static from2Dto3D', function () {
        it('should return a Vector3D with the components from the given Vector2D', function () {
            const testVector = new Vector2D(2, 5);
            const result = Vector3D.from2Dto3D(testVector)

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
});

describe('Vector2D', function () {
    describe('map', function () {
        it('should apply the given function to all of the vectors components except z', function () {
            const testVector = new Vector2D(2, 3);
            const result = new Vector2D(5, 10);

            let squarep1 = (n: number) => n ** 2 + 1;
            testVector.map(squarep1);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('set', function () {
        it('should set the vector to the given Vector2D object', function () {
            const testVector = new Vector2D(2, 3);
            const result = new Vector2D(4, 9);
            testVector.set(result);
            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should not set the vector to the given Vector3D object', function () {
            const testVector = new Vector2D(2, 3);
            const result = new Vector3D(4, 9, 12);
            let err;
            try {
                testVector.set(result);
            } catch (error) {
                err = error;
            }
            expect(typeof (err)).equal("string");
        });
        it('should set the vector to the given 2 numbers', function () {
            const testVector = new Vector2D(2, 3);
            const [x, y] = [12, 34];
            testVector.set(x, y);
            expect(testVector.x).equal(x);
            expect(testVector.y).equal(y);
            expect(testVector.z).equal(0);
        });
    });
    describe('add', function () {
        it('should add the given Vector2D object to the vector', function () {
            const testVector = new Vector2D(2, 3);
            const addVector = new Vector2D(3, 4);
            const result = new Vector2D(5, 7);

            testVector.add(addVector);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should not add the given Vector3D object to the vector', function () {
            const testVector = new Vector2D(2, 3);
            const result = new Vector3D(4, 9, 12);
            let err;
            try {
                testVector.add(result);
            } catch (error) {
                err = error;
            }
            expect(typeof (err)).equal("string");
        });
        it('should add the given 2 numbers to the vector', function () {
            const testVector = new Vector2D(2, 3);
            const [x, y] = [1, 2];
            const result = new Vector2D(3, 5);

            testVector.add(x, y);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('subtract', function () {
        it('should subtract the given Vector2D object to the vector', function () {
            const testVector = new Vector2D(2, 3);
            const subVector = new Vector2D(3, 4);
            const result = new Vector2D(-1, -1);

            testVector.subtract(subVector);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
        it('should not subtract the given Vector3D object to the vector', function () {
            const testVector = new Vector2D(2, 3);
            const result = new Vector3D(4, 9, 12);
            let err;
            try {
                testVector.subtract(result);
            } catch (error) {
                err = error;
            }
            expect(typeof (err)).equal("string");
        });
        it('should subtract the given 2 numbers to the vector', function () {
            const testVector = new Vector2D(2, 3);
            const [x, y] = [1, 2];
            const result = new Vector2D(1, 1);

            testVector.subtract(x, y);

            expect(testVector.x).equal(result.x);
            expect(testVector.y).equal(result.y);
            expect(testVector.z).equal(result.z);
        });
    });
    describe('angle', function () {
        it('should return the angle of the vector from the x axis', function () {
            const testVector = new Vector2D(1, 1);
            expect(testVector.angle()).equal(Math.PI / 4);
        });
    });
    describe('setAngle', function () {
        it('should set the angle of the vector to the given angle', function () {
            const testVector = new Vector2D(0, 1);
            testVector.setAngle(0);
            expect(testVector.x).equal(1);
            expect(testVector.y).equal(0);
        });
    });
    describe('rotate', function () {
        it('should rotate the vector by the given angle', function () {
            const testVector = new Vector2D(0, 1);
            testVector.rotate(Math.PI);
            // Math.round is used because the actual value returned is -1.8369701987210297e-16
            // which is due to truncation error
            expect(Math.round(testVector.x)).equal(0);
            expect(testVector.y).equal(-1);
        });
    });
    describe('toArray', function () {
        it('should return vector components as an array of 2 numbers', function () {
            const testVector = new Vector2D(3, 4);
            const result = [3, 4];

            const arr = testVector.toArray();

            expect(arr[0]).equal(result[0]);
            expect(arr[1]).equal(result[1]);
            expect(arr.length).equal(2);
        });
    });
    describe('toString', function () {
        it('should return vector components as a string', function () {
            const testVector = new Vector2D(3, 4);
            expect(testVector.toString()).equal("3,4");
        });
    });
    describe('copy', function () {
        it('should return a new Vector2D with the same components', function () {
            const testVector = new Vector2D(2, 3);
            const expectedResult = new Vector2D(2, 3);
            const result = testVector.copy();

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });

    // testing static functions
    describe('static add', function () {
        it('should add the given Vector2D objects together', function () {
            const testVector = new Vector2D(2, 3);
            const addVector = new Vector2D(3, 4);
            const expectedResult = new Vector2D(5, 7);

            const result = Vector2D.add(testVector, addVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });
    describe('static subtract', function () {
        it('should subtract the given Vector2D objects', function () {
            const testVector = new Vector2D(2, 3);
            const subVector = new Vector2D(3, 4);
            const expectedResult = new Vector2D(-1, -1);

            const result = Vector2D.subtract(testVector, subVector);

            expect(expectedResult.x).equal(result.x);
            expect(expectedResult.y).equal(result.y);
            expect(expectedResult.z).equal(result.z);
        });
    });
    describe('static zeroVector', function () {
        it('should return a Vector2D with all zero components', function () {
            const testVector = Vector2D.zeroVector();
            expect(testVector.x).equal(0);
            expect(testVector.y).equal(0);
            expect(testVector.z).equal(0);
        });
    });
    describe('static randUnitVector', function () {
        it('should return a random 2D unit vector', function () {
            const testVector = Vector2D.randUnitVector();
            expect(testVector instanceof Vector2D).equal(true);
            // Math.round is used because the value returned is 0.9999999999999999
            // this is due to truncation error
            expect(Math.round(testVector.mag())).equal(1);
        });
    });
    describe('static randomVector', function () {
        it('should return a random 2D vector with the given magnitude', function () {
            const testVector = Vector2D.randomVector(12);
            expect(testVector instanceof Vector2D).equal(true);
            expect(Math.round(testVector.mag())).equal(12);
        });
    });
    describe('static fromArray', function () {
        it('should return a Vector2D with the components from the given array', function () {
            const arr = [1, 2];
            const testVector = Vector2D.fromArray(arr);

            expect(testVector.x).equal(arr[0]);
            expect(testVector.y).equal(arr[1]);
            expect(testVector.z).equal(0);
        });
    });
    describe('static fromRTheta', function () {
        it('should return a Vector2D with the given magnitude and angle', function () {
            const testVector = Vector2D.fromRTheta(10, Math.PI / 4);
            expect(testVector.mag()).equal(10);
            expect(testVector.angle()).equal(Math.PI / 4);
        });
    });
    describe('static fromangle', function () {
        it('should return a unit Vector2D with the given angle', function () {
            const testVector = Vector2D.fromAngle(Math.PI / 2);
            expect(testVector.mag()).equal(1);
            expect(testVector.angle()).equal(Math.PI / 2);
        });
    });
});
