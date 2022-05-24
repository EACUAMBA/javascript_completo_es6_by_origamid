export default class Countdown{
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get _futureDate(){
        return new Date(this.futureDate);
    }

    get _actualDate(){
        return new Date();
    }

    get _timestampDiff(){
        return this._futureDate.getTime() - this._actualDate.getTime()
    }

    get days(){
        return Math.floor(this._timestampDiff / (24 * 60 * 60  * 1000));
    }

    get hours(){
        return Math.floor(this._timestampDiff / (60 * 60  * 1000));
    }

    get minutes(){
        return Math.floor(this._timestampDiff / (60  * 1000));
    }
    get seconds(){
        return Math.floor(this._timestampDiff / (1000));
    }

    get total(){
        let days = this.days;
        let hours = this.hours % 24;
        let minutes = this.minutes % 60;
        let seconds = this.seconds % 60;

        // let hours = this.hours - (this.days * 24);
        // let minutes = this.minutes - (this.hours * 60);
        // let seconds = this.seconds - (this.minutes * 60);
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }

}

console.log('Countdown')
