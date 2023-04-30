const {Shapes, Triangle, Circle, Square, SVG } = require('./shapes');

describe('Shapes', () => {
test('testing setting a Triangle color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.color).toBe('blue')
});

});

describe('Shapes', () => {
    test('testing setting a Circles color', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.color).toBe('red')
    });
});