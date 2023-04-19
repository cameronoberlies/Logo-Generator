const {Shapes, Triangle, Circle, Square, SVG } = require('./shapes');

describe('Shapes', () => {
test('testing setting a shapes color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.color).toBe('blue')
})

});