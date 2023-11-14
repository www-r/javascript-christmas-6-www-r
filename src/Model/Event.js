import {
	EVENT_BADGE,
	AMOUNT,
	EVENT_MIN_PRICE,
	D_DAY_EVENT_STARTING_PRICE,
	D_DAY_EVENT_INCREASING_PRICE,
	STARRED_DAY_EVENT_DISCOUNT,
	WEEK_EVENT_DISCOUNT,
	COURSE,
	MENU,
	CHRISTMAS_D_DAY,
	GIVEAWAY_EVENT_MIN_PRICE,
	NOTHING,
} from '../constants.js';
import menusData from '../menus.js';

class Event {
	#discount;
	//    new Date() new Menu()
	constructor(date, menu) {
		this.#discount = [
			this.#calculateDDayEventDiscount(date),
			this.#calculateWeekEventDiscount(date, menu),
			this.#calculateStarredDayEventDiscount(date),
		];
		this.getDiscountList = this.getDiscountList;
		this.validateGiveAwayEvent = this.validateGiveAwayEvent;
		this.getGiveAwayInfo = this.getGiveAwayInfo;
		this.getBadge = this.getBadge;
	}
	#calculateDDayEventDiscount(date) {
		// console.log('디데이이벤트할인계산시작! ');
		// console.log('date', date);
		const dDayDate = date.getDate();
		if (dDayDate > CHRISTMAS_D_DAY) {
			return AMOUNT.ZERO;
		} else {
			const dDayDiscount = D_DAY_EVENT_STARTING_PRICE + D_DAY_EVENT_INCREASING_PRICE * (date.getDate() - 1);
			return dDayDiscount;
		}
	}
	#calculateWeekEventDiscount(date, menu) {
		const isWeekend = date.getIsWeekend();

		if (!isWeekend) {
			//dessert
			const dessertFoodArr = this.#getDessertFoodArr(menu);
			let weekDiscount = 0;
			if (dessertFoodArr.length > 0) {
				dessertFoodArr.forEach((food) => {
					weekDiscount += food.getAmount() * WEEK_EVENT_DISCOUNT;
				});
				return weekDiscount;
			} else {
				return AMOUNT.ZERO;
			}
		}
		if (isWeekend) {
			//main
			const mainFoodArr = this.#getMainFoodArr(menu);
			let weekDiscount = 0;
			if (mainFoodArr.length > 0) {
				mainFoodArr.forEach((food) => {
					weekDiscount += food.getAmount() * WEEK_EVENT_DISCOUNT;
				});
				return weekDiscount;
			} else {
				return AMOUNT.ZERO;
			}
		}
		return AMOUNT.ZERO;
	}
	#calculateStarredDayEventDiscount(date) {
		if (date.getIsStarred(date)) {
			return STARRED_DAY_EVENT_DISCOUNT;
		} else {
			return AMOUNT.ZERO;
		}
	}
	#getDessertFoodArr(menu) {
		const orderedFoodArr = menu.getFoodArr();
		const dessertFoodArr = [];
		orderedFoodArr.forEach((orderedFood) => {
			const orderedFoodCourse = orderedFood.getCourse();
			if (orderedFoodCourse === COURSE.DESSERT) {
				dessertFoodArr.push(orderedFood);
			}
		});
		return dessertFoodArr;
	}
	#getMainFoodArr(menu) {
		const orderedFoodArr = menu.getFoodArr();
		const mainFoodArr = [];
		orderedFoodArr.forEach((orderedFood) => {
			const orderedFoodCourse = orderedFood.getCourse();
			if (orderedFoodCourse === COURSE.MAIN) {
				mainFoodArr.push(orderedFood);
			}
		});
		return mainFoodArr;
	}
	// validateTotalPrice(totalPrice) {
	// 	if (totalPrice < EVENT_MIN_PRICE) {
	// 		return false;
	// 	}
	// 	return true;
	// }
	validateGiveAwayEvent(totalPricePreDiscount) {
		if (totalPricePreDiscount >= GIVEAWAY_EVENT_MIN_PRICE) {
			return true;
		} else {
			return false;
		}
	}
	getTotalBenefits(totalPricePreDiscount) {
		return this.#discount[0] + this.#discount[1] + this.#discount[2] + this.validateGiveAwayEvent(totalPricePreDiscount)
			? menusData.get(MENU.CHAMPAGNE).price
			: AMOUNT.ZERO;
	}
	getDiscountList() {
		return this.#discount;
	}
	getTotalDiscount() {
		return this.#discount[0] + this.#discount[1] + this.#discount[2];
	}
	getGiveAwayInfo() {
		return [MENU.CHAMPAGNE, AMOUNT.ONE];
	}
	getBadge(totalBenefits) {
		if (totalBenefits >= EVENT_BADGE.SANTA_MIN) {
			return EVENT_BADGE.SANTA;
		}
		if (totalBenefits >= EVENT_BADGE.TREE_MIN) {
			return EVENT_BADGE.TREE;
		}
		if (totalBenefits >= EVENT_BADGE.STAR_MIN) {
			return EVENT_BADGE.STAR;
		}
		return AMOUNT.NONE;
	}
}
export default Event;
