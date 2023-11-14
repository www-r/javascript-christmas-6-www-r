import { Console } from '@woowacourse/mission-utils';
// import OutputView from './OutputView.js';

const InputView = class {
	// constructor() {
	// 	this.outputView = new OutputView();
	// }
	constructor() {
		this.readData = this.readData;
	}
	async readData(message) {
		return await Console.readLineAsync(message);
	}
};

export default InputView;
