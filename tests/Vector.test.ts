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
            expect(testVector.magSq()).equal(13);
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
            expect(testVector.z).equal(result.z);;
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
});

// describe('Vector2D', function () {
//     it('add', function () {
//         let result = C.Sum(5, 2);
//         expect(result).equal(7);
//     });

//     it('substract', function () {
//         let result = C.Difference(5, 2);
//         expect(result).equal(3);
//     });
// });