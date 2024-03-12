import CurrencyAPI from "./node_modules/@everapi/currencyapi-js/index.js"
const currencyApi = new CurrencyAPI("cur_live_mjssoAewc2eBDAW1qAQK27TDYh7ILgh78rEwKBCE");

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