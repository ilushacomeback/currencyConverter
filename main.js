class CurrencyAPI {
    baseUrl = 'https://api.currencyapi.com/v3/';

    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    call (endpoint, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();

        return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    status () {
        return this.call('status');
    }

    currencies (params) {
        return this.call('currencies', params);
    }

    latest (params) {
        return this.call('latest', params);
    }

    historical (params) {
        return this.call('historical', params);
    }

    range (params) {
        return this.call('range', params);
    }

    convert (params) {
        return this.call('convert', params);
    }
}

const currencyApi = new CurrencyAPI('cur_live_mjssoAewc2eBDAW1qAQK27TDYh7ILgh78rEwKBCE')

const curValute = document.querySelector('select[name=currencyOne]')
const nextValute = document.querySelector('select[name=currencyTwo]')
const form = document.querySelector('.form')
const input = document.querySelector('input[type=number]')
const result = document.querySelector('.valute')

const state = {
    current: 'RUB',
    next: 'RUB',
    number: null
}

const render = (state) => {
    currencyApi.latest({
        base_currency: state.current,
        currencies: state.next
    }).then((response) => {
        const currency = response.data[state.next].value
        const res = Number(state.number) * Number(currency)
        result.innerHTML = res.toFixed(2)
        input.value = ''
    })
}

input.addEventListener('input', (e) => {
    e.preventDefault()
    state.number = e.target.value
})

curValute.addEventListener('change', (e) => {
    state.current = e.target.value
})
nextValute.addEventListener('change', (e) => {
    state.next = e.target.value
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    render(state)
})