'use strict'

console.log('-----------');
console.log('Пункт №1:')
console.log('-----------');

fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body.data);
      console.log('-----------');
      console.log('Пункт №2:')
      console.log('-----------');
      body.data.forEach((item) => {
        console.log(item.last_name);
      })
      console.log('-----------');
      console.log('Пункт №3:')
      console.log('-----------');
      body.data
        .filter((item) => item.last_name.startsWith("F"))
        .forEach((element) => {
          console.log(element.last_name);
      })
      console.log('-----------');
      console.log('Пункт №4:')
      console.log('-----------');
      console.log(body.data.reduce((acc, item) => acc + item.first_name + ' ' + item.last_name + ', ', `Наша база содержит данные следующих пользователей: `).slice(0, -2));
      console.log('-----------');
      console.log('Пункт №5:')
      console.log('-----------');    
      console.log(Object.keys(body.data[0]));
    })