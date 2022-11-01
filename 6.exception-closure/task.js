function parseCount(a) {
    const value = parseInt(a, 10);
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(a) {
    try {
        const value = parseCount(a);
        return value;
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a || a === 0 || b === 0 || c === 0) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        console.log(e);
        return {
            getPerimeter: function() {
                return "Ошибка! Треугольник не существует";
            },
            getArea: function() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
