const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DAYS_IN_MONTH = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const GREETING = `안녕하세요! 우테코 식당 ${MONTH[11]}월 이벤트 플래너입니다.`;
const ASK_SCHEDULE = `${MONTH[11]}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`;
const ASK_MENU_INFO = `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. ${MENU.MAIN.SEAFOOD_PASTA}-2,${MENU.DRINKS.RED_WINE}-1,${MENU.DESSERT.CHOCOLATE_CAKE}-1)'`;
const SEE_MORE_ABOUT_EVENTS = `${MONTH[11]}월 ${'26'}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
const HEADER = Object.freeze({
	MENU: '<주문 메뉴>',
	TOTAL_PRICE_BEFORE_DISCOUNT: '<할인 전 총주문 금액>',
	GIVEAWAY_MENU: '<증정 메뉴>',
	BENEFITS_LIST: '<혜택 내역>',
	TOTAL_BENEFIT_PRICE: '<총혜택 금액>',
	EXPECTED_PRICE_AFTER_DISCOUNT: '<할인 후 예상 결제 금액>',
	EVENT_BADGE: `<${MONTH[11]}월 이벤트 배지>`,
});
const MENU = Object.freeze({
	STARTER: {
		MUSHROOM_SOUP: '양송이수프',
		TAPAS: '타파스',
		SALAD: '시저샐러드',
	},
	MAIN: {
		T_BONE_STEAK: '티본스테이크',
		BBQ_RIP: '바비큐립',
		SEAFOOD_PASTA: '해산물파스타',
		X_MAS_PASTA: '크리스마스파스타',
	},
	DESSERT: {
		CHOCOLATE_CAKE: '초코케이크',
		ICE_CREAM: '아이스크림',
	},
	DRINKS: {
		ZERO_COKE: '제로콜라',
		RED_WINE: '레드와인',
		CHAMPAGNE: '샴페인',
	},
});
const DAYS = Object.freeze({
	WEEKDAYS: [SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
	WEEKENDS: [FRIDAY, SATURDAY],
});
const UNIT = Object.freeze({
	WON: '원',
	GAE: '개',
});
const ERROR = Object.freeze({
	name: '[ERROR]',
	message: {
		NOT_VALID_NUMBER: '유효하지 않은 날짜입니다.',
		WRITE_AGAIN: '다시 입력해주세요.',
		NOT_VALID_ORDER: '유효하지 않은 주문입니다.',
	},
});
const AMOUNT = {
	ONE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
	TEN: 10,
	ELEVEN: 11,
	TWELVE: 12,
	THIRTEEN: 13,
	FOURTEEN: 14,
	FIFTEEN: 15,
	SIXTEEN: 16,
	SEVENTEEN: 17,
	EIGHTEEN: 18,
	NINETEEN: 19,
	TWENTY: 20,
};
