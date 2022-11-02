class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        if (this.alarmCollection.some(el => el.id === id)) return console.error('Будильник с таким id уже существует.');
        else this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        const alarmsLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(el => el.id !== id);
        if (alarmsLength > this.alarmCollection.length) return true;
        else return false;
    }

    getCurrentFormattedTime() {
        let date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return hours + ":" + minutes;
    }

    start() {
        let checkClock = clock => {
            if (clock.time === this.getCurrentFormattedTime()) {
                clock.callback();
            }
        };
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(el => {
                    checkClock(el);
                });
            }, 50000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(el => {
            console.log(`Будильник №${el.id} заведён на ${el.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
