import { Console } from '@woowacourse/mission-utils';
import { UNIT, DISCOUNT_LIST, AMOUNT, DIVIDER_HYPHEN, NOTHING } from '../constants.js';
const OutputView = class {
	constructor() {
		this.print;
		this.printMenu;
		this.printMoney;
		this.printAmount;
		this.printDiscountList;
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
		if (discountList[0] === 0 && discountList[1] === 0 && discountList[2] === 0) {
			Console.print(AMOUNT.NONE);
			return;
		}
		const isWeekend = date.getIsWeekend();
		Console.print(
			`${DISCOUNT_LIST.D_DAY_EVENT}${discountList[0] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN}${discountList[0]}${
				UNIT.WON
			}`
		);
		// console.log('discountList:', discountList);
		if (isWeekend) {
			Console.print(
				`${DISCOUNT_LIST.WEEKEND_EVENT}${
					discountList[1] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
				}${discountList[1].toLocaleString()}${UNIT.WON}`
			);
		}
		if (!isWeekend) {
			Console.print(
				`${DISCOUNT_LIST.WEEKDAY_EVENT}${
					discountList[1] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
				}${discountList[1].toLocaleString()}${UNIT.WON}`
			);
		}
		Console.print(
			`${DISCOUNT_LIST.STAR_EVENT}${
				discountList[2] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
			}${discountList[2].toLocaleString()}${UNIT.WON}`
		);
		Console.print(
			`${DISCOUNT_LIST.GIVEAWAY_EVENT}${
				discountList[3] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
			}${discountList[3].toLocaleString()}${UNIT.WON}`
		);
	}
};

export default OutputView;
