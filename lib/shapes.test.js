const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
    const circle = new Circle('#ff0000');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="#ff0000" />');
});

test('Triangle renders correctly', () => {
    const triangle = new Triangle('#00ff00');
    expect(triangle.render()).toBe('<polygon points="150,20 280,180 20,180" fill="#00ff00" />');
});

test('Square renders correctly', () => {
    const square = new Square('#0000ff');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="#0000ff" />');
});