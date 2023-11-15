import { MissionUtils } from '@woowacourse/mission-utils';
import { UNIT, DISCOUNT_LIST, AMOUNT, DIVIDER_HYPHEN, NOTHING } from '../constants.js';
const OutputView = class {
	constructor() {
		this.print = this.print;
		this.printMenu = this.printMenu;
		this.printMoney = this.printMoney;
		this.printAmount = this.printAmount;
		this.printDiscountList = this.printDiscountList;
	}
	print(message) {
		MissionUtils.Console.print(message);
	}
	printMenu(menuName, menuAmount) {
		MissionUtils.Console.print(`${menuName} ${menuAmount}${UNIT.GAE}`);
	}
	printMoney(number) {
		MissionUtils.Console.print(`${number.toLocaleString()}${UNIT.WON}`);
	}
	printAmount(number) {
		MissionUtils.Console.print(`${number}${UNIT.GAE}`);
	}
	printDiscountList(discountList, date) {
		if (discountList[0] === 0 && discountList[1] === 0 && discountList[2] === 0) {
			MissionUtils.Console.print(AMOUNT.NONE);
			return;
		}
		const isWeekend = date.getIsWeekend();
		MissionUtils.Console.print(
			`${DISCOUNT_LIST.D_DAY_EVENT}${discountList[0] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN}${discountList[0]}${
				UNIT.WON
			}`
		);
		// console.log('discountList:', discountList);
		if (isWeekend) {
			MissionUtils.Console.print(
				`${DISCOUNT_LIST.WEEKEND_EVENT}${
					discountList[1] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
				}${discountList[1].toLocaleString()}${UNIT.WON}`
			);
		}
		if (!isWeekend) {
			MissionUtils.Console.print(
				`${DISCOUNT_LIST.WEEKDAY_EVENT}${
					discountList[1] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
				}${discountList[1].toLocaleString()}${UNIT.WON}`
			);
		}
		MissionUtils.Console.print(
			`${DISCOUNT_LIST.STAR_EVENT}${
				discountList[2] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
			}${discountList[2].toLocaleString()}${UNIT.WON}`
		);
		MissionUtils.Console.print(
			`${DISCOUNT_LIST.GIVEAWAY_EVENT}${
				discountList[3] === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN
			}${discountList[3].toLocaleString()}${UNIT.WON}`
		);
	}
};

export default OutputView;
