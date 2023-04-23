const canvas = require('svg-canvas');


function shapesJS(answers) {
    console.log(answers)
    let shape;
    if(answers.shape === "Triangle") {
        shape = new Triangle()
    }else if(answers.shape === "Circle") {
        shape = new Circle()
    }else {
        shape = new Square()
    }
    shape.setColor(answers.shapecolor)
    const shapeRender = shape.render()
    const svg = new SVG(answers.characters, answers.textcolor, shapeRender)
    return svg.render()
};

class Shapes {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color =  color;
    }
};

class SVG {
    constructor(text, textcolor, shape) {
        this.text = text
        this.textcolor = textcolor;
        this.shape = shape;
    }

    render() {
        return `<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg"><text><tspan font-weight="bold" fill="${this.textcolor}">${this.text}</tspan></text>${this.shape}</svg>`
    }
};

class Triangle extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="200,10 250,190 160,210" stroke= "${this.color}" fill = "${this.color}"  />`
    }
};

class Square extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
};

class Circle extends Shapes {
    constructor(color) {
        super(color)
    }

    render() {
        return `<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
    }
};






module.exports  = {shapesJS, Shapes, Triangle, Square, Circle, SVG};
