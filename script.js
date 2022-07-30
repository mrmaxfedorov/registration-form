'use strict'

console.log('----------Lesson-01----------') 
let money = 30000 // Месячный бюджет
let profit = 'частные занятия 400' // Дополнительный доход
let expenses = 'транспорт 190, проживание 1000, питание 2200' // Расходы
let purpose = 250000 // Хотим накопить - пришлось увеличить значение в ДЗ-2 для приличия
let period = 3

console.log(typeof money,'- тип строки с бюджетом,', typeof profit,'- тип строки с доп.доходом');
console.log(expenses.length, 'символа - длина строки с расходами');

const mission = purpose

console.log('“Период равен', period,' месяцев” и “Цель заработать', mission, 'рублей/долларов ”')

let budgetDay = money/30
console.log(budgetDay)

console.log('----------Lesson-02----------')

money = prompt('Ваш месячный доход?')
console.log('Вы указали, что ваш месячный доход составляет', money, 'руб.')

expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
console.log('Ваши возможные расходы за период:', expenses)

let amount = prompt('Во сколько обойдуться обязательные статьи расходов?')
console.log(amount, 'руб. - сумма ваших обязательные статей расходов')

let deposit = confirm('Есть ли у вас вклад в банке?')
console.log('Наличие вклада в банке:', deposit)

let budgetMonth = money - amount;
console.log('Месячный бюджет (доход минус обязательные расходы):', budgetMonth, 'руб.')

let months = purpose/budgetMonth;
console.log('Кол-во месяцев, необходимых для достижения цели:', Math.ceil(months), 'мес.')

budgetDay = budgetMonth/30
console.log('Бюджет на сутки составит', Math.floor(budgetDay), 'руб./день')

if (budgetDay>6000) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay<6000 && budgetDay>3000) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay<3000 && budgetDay>0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay<=0) {
  console.log('Что то пошло не так')
}