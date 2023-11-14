import { Console } from '@woowacourse/mission-utils';
import { UNIT, DISCOUNT_LIST } from '../constants.js';
const OutputView = class {
	constructor(){
		this.print
		this.printMenu
		this.printMoney
		this.printAmount
		this.printDiscountList
	}
	print(message) {
		Console.print(message);
	}
	printMenu(menuName, menuAmount) {
		Console.print(`${menuName} ${menuAmount}${UNIT.GAE}`);
	}
	printMoney(number) {
		Console.print(`${number.toLocaleString()}${UNIT.WON}`);
	}
	printAmount(number) {
		Console.print(`${number}${UNIT.GAE}`);
	}
	printDiscountList(discountList, date) {
		const isWeekend = date.getIsWeekend();
		Console.print(`${DISCOUNT_LIST.D_DAY_EVENT}${discountList[0]}UNIT.WON`);
		if (isWeekend) {
			Console.print(`-${DISCOUNT_LIST.WEEKEND_EVENT}${discountList[1]}UNIT.WON`);
		} else {
			Console.print(`-${DISCOUNT_LIST.WEEKDAY_EVENT}${discountList[1]}UNIT.WON`);
		}
		Console.print(`-${DISCOUNT_LIST.STAR_EVENT}${discountList[2]}UNIT.WON`);
		Console.print(`-${DISCOUNT_LIST.GIVEAWAY_EVENT}${discountList[3]}UNIT.WON`);
	}
};

export default OutputView;
