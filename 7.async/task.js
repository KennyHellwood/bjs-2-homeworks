class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        let pushAttempt = true;
        this.alarmCollection.forEach(el => {
            if (el.id === id) {
                pushAttempt = false;
                return console.error('Будильник с таким id уже существует.');;
            }
        });
        if (pushAttempt) this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        this.alarmCollection.forEach((el, index) => {
            if (el.id === id) {
                this.alarmCollection.splice(index, 1);
                return true;
            }
        });
        return false;
    }

    getCurrentFormattedTime() {
        let date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return hours + ":" + minutes;
    }

    start() {
        function checkClock(clock) {
            if (clock.time === this.getCurrentFormattedTime()) {
                clock.callback();
            }
        }
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
        this.alarmCollection.splice(0);
    }
}
