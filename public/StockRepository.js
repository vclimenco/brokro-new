class Stock {
    name = '';
    buyPrice = 0.0;
    sellPrice = 0.0;
}

class StockRepository {
    #ticker = '';
    #url = '';

    constructor(ticker) {
        this.#ticker = ticker;
        this.#url = `https://api.kraken.com/0/public/Ticker?pair=${this.#ticker}usd`;
    }

    getTicker() {
        fetch(this.#url)
            .then(response => response.json())
            .then(data => console.log(data));
    }
}