class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) return this._state = 0;
        else if (state > 100) return this._state = 100;
        this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } else {
            console.log("Мы не можем принять такую книгу!");
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = []; // [[subject, ...marks], [subject, ...marks], ...]
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) return console.log("Оценка должна быть от 1 до 5!");
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].includes(subject)) {
                return this.marks[i].push(mark);
            }
        }
        this.marks.push([subject, mark]);
    }

    getAverageBySubject(subject) {
        let marks = [];
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].includes(subject)) {
                marks = this.marks[i];
                break;
            }
        }
        if (marks.length === 0) return console.log("Оценок по этому предмету нет!");
        marks = marks.slice(1);
        const sum = marks.reduce((acc, mark) => acc + mark);
        return console.log(`Средняя оценка по предмету ${subject} - ${sum / marks.length}.`);
    }

    getAverage() {
        let marksMain = [];
        for (let i = 0; i < this.marks.length; i++) {
            let marksSub = this.marks[i].slice(1);
            marksSub.forEach(el => marksMain.push(el));
        }
        const sum = marksMain.reduce((acc, mark) => acc + mark);
        return console.log(`Средняя оценка по всем предметам - ${sum / marksMain.length}.`);
    }

    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}

let student = new Student("Ilya");

student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
