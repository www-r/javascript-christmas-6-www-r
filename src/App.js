import { Console } from '@woowacourse/mission-utils';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import Date from './Model/Date.js';
import Menu from './Model/Menu.js';
import Event from './Model/Event.js';
import {
	AMOUNT,
	ASK,
	DIVIDER_HYPHEN,
	GREETING,
	HEADER,
	UNIT,
	MENU,
	SEE_MORE_ABOUT_EVENTS,
	NOTHING,
} from './constants.js';
import menusData from './menus.js';

class App {
	constructor() {
		this.inputView = new InputView();
		this.outputView = new OutputView();
	}
	async run() {
		try {
			this.outputView.print(GREETING);
			let dateInput;
			try {
				dateInput = await this.#getDateInput();
			} catch (error) {
				dateInput = await this.#getDateInput();
			}
			const date = new Date(dateInput);
			let menuInput;
			try {
				menuInput = await this.#getMenuInput();
			} catch (error) {
				menuInput = await this.#getMenuInput();
			}
			const menu = new Menu(menuInput);
			// this.outputView.print(ASK.SCHEDULE);
			// const dateInput = await this.inputView.readData(ASK.SCHEDULE);
			// this.outputView.print(dateInput);
			// const date = new Date(dateInput);
			// this.outputView.print(ASK.MENU_INFO);
			// const menuInput = await this.inputView.readData(ASK.MENU_INFO);
			// this.outputView.print(menuInput);
			// const menu = new Menu(menuInput);
			this.outputView.print(SEE_MORE_ABOUT_EVENTS(date.getDate()));
			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.MENU);
			const foodArr = menu.getFoodArr();
			foodArr.forEach((food) => {
				const name = food.getName();
				const amount = food.getAmount();
				this.outputView.print(`${name}${DIVIDER_HYPHEN}${amount}${UNIT.GAE}`); //printMenu
			});
			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.TOTAL_PRICE_BEFORE_DISCOUNT);
			const totalPricePreDiscount = menu.getTotalPrice();
			this.outputView.print(`${totalPricePreDiscount.toLocaleString()}${UNIT.WON}`); // printMoney

			const event = new Event(date, menu);
			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.GIVEAWAY_MENU); //
			const [giveAwayFoodName, giveAwayFoodAmount] = event.getGiveAwayInfo();
			this.outputView.printMenu(giveAwayFoodName, giveAwayFoodAmount);

			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.BENEFITS_LIST);
			const discountArr = event.getDiscountList();
			const giveAwayPrizePrice = event.validateGiveAwayEvent(totalPricePreDiscount)
				? menusData.get(MENU.CHAMPAGNE).price
				: AMOUNT.ZERO;

			this.outputView.printDiscountList([...discountArr, giveAwayPrizePrice], date);
			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.TOTAL_BENEFITS_PRICE);
			const totalBenefits = event.getTotalBenefits();

			this.outputView.print(
				`${totalBenefits === AMOUNT.ZERO ? NOTHING : DIVIDER_HYPHEN}${totalBenefits.toLocaleString()}${UNIT.WON}`
			);
			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.TOTAL_PRICE_AFTER_DISCOUNT);
			const totalDiscount = event.getTotalDiscount(totalPricePreDiscount);
			this.outputView.print(`${(totalPricePreDiscount - totalDiscount).toLocaleString()}${UNIT.WON}`);
			this.outputView.print(NOTHING);
			this.outputView.print(HEADER.EVENT_BADGE);
			const badge = event.getBadge(totalBenefits);
			this.outputView.print(badge);
		} catch (error) {
			console.log('error', error.message);
		}
	}
	async #getDateInput() {
		this.outputView.print(ASK.SCHEDULE);
		const dateInput = await this.inputView.readData(ASK.SCHEDULE);
		this.outputView.print(dateInput);
		new Date(dateInput);
		return dateInput;
	}
	async #getMenuInput() {
		this.outputView.print(ASK.MENU_INFO);
		const menuInput = await this.inputView.readData(ASK.MENU_INFO);
		this.outputView.print(menuInput);
		new Menu(menuInput);
		return menuInput;
	}
}

export default App;
