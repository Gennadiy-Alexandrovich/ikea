//Сооздаем массив и его экспортируем

export const getData = {
  url: 'database/dataBase.json', //создаем  url до нашей базы
  get(process) {//метод get мы передаем колбек ф-ю process (колбек ф-я будет запускать обработку)
    fetch(this.url)//глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно, АПи запрос на сервер по URL
      //асинхронно глобального метода fetch(), который возвращает Promise с объектом типа Response который мы обрабатываем then
      //_promise
      //.then(result => {...})обработка 
      //.catch(error => {...})ошибка 
      //.finally(() => {...});
      .then((response) => response.json())//В переменной response мы получаем поток данный с сервера (ReadableStream) и преобразуем эти данные в json  формат then -передает promise дальше по цепочке
      //.then((data) =>  console.log(data))//В переменной data мы получаем данные в json формате
      //.then((data) =>  1)
      .then((data) => console.log(data)
      
    // .then(process);
   
    }
};

getData.get();