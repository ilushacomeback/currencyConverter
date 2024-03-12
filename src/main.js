import CurrencyAPI from "@everapi/currencyapi-js"; /*Не удалось найти файл объявления модуля "@everapi/currencyapi-js". 
"c:/Users/USER/Desktop/pet_proj/currency_converter/node_modules/@everapi/currencyapi-js/index.js" имеет неявный тип "any".
Попробуйте использовать команду "npm i --save-dev @types/everapi__currencyapi-js", если он существует,
или добавьте новый файл объявления (.d.ts), содержащий "declare module '@everapi/currencyapi-js';".ts(7016) */

const currencyApi = new CurrencyAPI(
  "cur_live_mjssoAewc2eBDAW1qAQK27TDYh7ILgh78rEwKBCE"
);
