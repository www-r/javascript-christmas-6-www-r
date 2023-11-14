import { FIRST_DAY_OF_MONTH, LAST_DAY_OF_MONTH, EVENT_DAYS, ERROR } from '../constants.js';
class Date {
	#date;
	constructor(string) {
		this.#date = this.#validateDate(string);
		this.getDate = this.getDate;
		this.getIsWeekend = this.getIsWeekend;
		this.getIsStarred = this.getIsStarred;
	}
	#validateDate(string) {
		if (string) {
			const number = Number(string);
			this.#validateInteger(number);
			this.#validateRange(number);
			return number;
		} else {
			throw new Error(ERROR.message.NOT_VALID_NUMBER);
		}
	}
	#validateInteger(number) {
		if (Number.isInteger(number)) {
			return number;
		} else {
			throw new Error(ERROR.message.NOT_VALID_NUMBER);
		}
	}
	#validateRange(number) {
		if (number >= FIRST_DAY_OF_MONTH && number <= LAST_DAY_OF_MONTH) {
			return number;
		} else {
			throw new Error(ERROR.message.NOT_VALID_NUMBER);
		}
	}
	#validateIfWeekend(date) {
		if (EVENT_DAYS.WEEKENDS.includes(date)) {
			return true;
		} else {
			return false;
		}
	}
	getDate() {
		return this.#date;
	}
	getIsWeekend() {
		return this.#validateIfWeekend(this.#date);
	}
	getIsStarred(date) {
		if (EVENT_DAYS.STARRED_DAYS.includes(date.getDate())) {
			return true;
		} else return false;
	}
}

export default Date;
