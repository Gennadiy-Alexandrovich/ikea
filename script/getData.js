//Сооздаем массив и его экспортируем

export const getData = {
  url: 'database/dataBase.json', //создаем  url до нашей базы
  get(process) {//В метод get мы передаем колбек ф-ю process (колбек ф-я будет запускать обработку)
    fetch(this.url)//глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно, АПи запрос на сервер по URL
      //асинхронно глобального метода fetch(), который возвращает Promise с объектом типа Response который мы обрабатываем then
      //_promise
      //.then(result => {...})обработка Promise
      //.catch(error => {...})обработка ошибки
      //.finally(() => {...});
      .then((response) => response.json())//В then мы передаем ф-ю (response) переменной response мы получаем поток данный с сервера (ReadableStream) и преобразуем эти данные в json  формат then -передает promise дальше по цепочке
      //.then((data) =>  console.log(data))//В переменной data мы получаем данные в json формате
      //.then((data) =>  1)
      // .then((data) => console.log(data))//В переменной data мы получаем данные в json формате
      // .then((data) => 1)//Здесь мы присвоили 1 и в консоле выходит 1
      // .then((data) => console.log(data))

      .then(process);//Здесь запускается ф-я process с теми данными которые мы передадим

  },
  //Разные методы для получения списка которые будем по разному обрабатывать

  wishList(list, callback) {
    this.get((data) => {
      const result = data.filter((item) => list.includes(item.id));
      callback(result);
    })
  }


};
// getData.get();



