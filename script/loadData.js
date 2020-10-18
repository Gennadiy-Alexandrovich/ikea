//Файл для загрузки данных на сервер

import { getData } from './getData.js';

const wichList = ['idd010', 'idd030', 'idd100', 'idd50'];//Лист желаний
  
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
    if(location.search){//обрашаемся к location и проверяем есть ли там search
      const search = decodeURI(location.search);//Метод decodeURI() декодирует унифицированный идентификатор ресурса (URI) получаем массив search  с данными на русском языке
      console.log(location.search)
      console.log(search)
      const prop = search.split('=')[0].substring(1);//разбей данные  массива search split по Знаку равно нулевой элемент и убери первый символ
      console.log(prop)
      const value = search.split('=')[1];//разбей данные массива search  split по Знаку равно первый элемент
      console.log(value)
  

    }
    if(location.hash){//обрашаемся к location и проверяем есть ли hash
    console.log("hash")

    }
    if(location.pathname.includes('cart')){//обрашаемся к location и проверяем есть ли  в pathname(путь к ресурсу) cart
    console.log("pathname")

    }

};