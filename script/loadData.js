//Файл для загрузки данных на сервер

import { getData } from './getData.js';

const wishList = ['idd010', 'idd030', 'idd100', 'idd050'];//Лист желаний

const cardList = [//Спиок корзины массив с обьектом(кроме id: 'idd010' нужно еще колличество: count: 4) 
  {
    id: 'idd010',
    count: 4
  },
  {
    id: 'idd014',
    count: 6
  },
  {
    id: 'idd077',
    count: 2
  }


];

export const loadData = () => {
  //Есть ОБЬЕКТ location ( если набрать в консоле location) в этом обьекте есть search и hash иpathname и тд
  //B hash: 'idd010' (айдишник нашего товара)
  //B search: '(название нашего товара нашего товара)
  if (location.search) {//обрашаемся к location и проверяем есть ли там search
    const search = decodeURI(location.search);//Метод decodeURI() декодирует унифицированный идентификатор ресурса (URI) получаем массив search  с данными на русском языке
    console.log(location.search)
    console.log(search)
    const prop = search.split('=')[0].substring(1);//разбей данные  массива search split по Знаку равно выведи в prop нулевой элемент и убери первый символ
    console.log(prop)
    const value = search.split('=')[1];//разбей данные массива search  split по Знаку равно и выведи в value первый элемент 
    console.log(value)
    console.log(location);



    if (prop === 's') {
      console.log('value');
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, (data) => console.log(data));
      //импортируем getData из файла getData.js и примеяем ему метод wichList с 
      //параметром const wichList = ['idd010', 'idd030', 'idd100', 'idd50'];//Лист желаний.  и с колбек ф-ей Сам метод wichList(wichList) прописан в файле getData.js
      //console.log(wichList);
    } else {
      console.log(prop, value);
    }
  }

  if (location.hash) {//обрашаемся к location и проверяем есть ли hash
    console.log(location.hash.substring(1));

  }
  if (location.pathname.includes('cart')) {//обрашаемся к location и проверяем есть ли  в pathname(путь к ресурсу) cart
    console.log(cardList)

  }

};