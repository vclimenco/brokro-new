class StockService {
    #ticker = '';
    #stockRepository;
    constructor(ticker) {
        this.#ticker = ticker;
        this.#stockRepository = new StockRepository(ticker);
    }

    getTicker() {
        this.#stockRepository.getTicker();
    }
}
// move the functionality to worklet
// TODO: add setInterval
// TODO: add notoification + vibration => that should be done in a wrapper
// TODO: add OHLC
var stockService = new StockService('kava');
stockService.getTicker();