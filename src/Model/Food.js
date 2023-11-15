import { ERROR, MAX_AMOUNT, MIN_AMOUNT } from '../constants.js';
import menusData from '../menus.js';
class Food {
	#name;
	#amount;
	constructor(name, amount) {
		this.#name = this.#validateMenuName(name);
		this.#amount = this.#validateAmount(+amount);
		this.getName = this.getName;
		this.getAmount = this.getAmount;
		this.getPrice = this.getPrice;
		this.getCourse = this.getCourse;
	}
	#validateMenuName(name) {
		if (menusData.has(name)) {
			return name;
		}
		throw new Error(ERROR.message.NOT_VALID_ORDER);
	}
	#validateAmount(amount) {
		if (amount >= MIN_AMOUNT && amount <= MAX_AMOUNT) {
			return amount;
		}
		throw new Error(ERROR.message.NOT_VALID_ORDER);
	}
	getName() {
		return this.#name;
	}
	getAmount() {
		return this.#amount;
	}
	getPrice() {
		return menusData.get(this.#name).price;
	}
	getCourse() {
		return menusData.get(this.#name).course;
	}
}
export default Food;
