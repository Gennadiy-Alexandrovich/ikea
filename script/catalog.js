// console.dir(document);
// console.log(document);
// let varName = document.querySelectorAll('.btn')
// console.log("varName", varName)
// console.log(varName)
export const catalog = () => {//оборачиваем все в одну ф-ю (патерн) и экспортируем

    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    // const overlay = document.querySelector('.overlay');
    const btnClose = document.querySelector('.btn-close');
    const catalogList = document.querySelector('.catalog-list'); //Получаем список каталога ( подкаталог):кликая на подкаталог мы будем получчать сабкаталог
    const subCatalog = document.querySelector('.subcatalog'); //Получаем список сабкаталога ( субкаталог)
    const btnReturn = document.querySelector('.btn-return');
    const subcatalogHeader = document.querySelector('.subcatalog-header');

    const overlay = document.createElement('div');//Создаем переменную overlay и в е присваиваем тег <div>
      //В HTML-документах createElement создает элемент c тем тегом, что указан в аргументе или
      overlay.classList.add('overlay');//в переменную с тегом <div> мы присваиваем сlass = overlay
      document.body.insertAdjacentElement('beforeend', overlay);//Добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.
                                        //'beforeend': сразу перед закрывающим тегом element (после последнего потомка), перед тегом </body>
      //document.body.append(overlay);//Метод append позволяет вставить в конец какого-либо другой элемент. 

    const openMenu = () => { //ф-я добавления классов
      catalog.classList.add('open');
      overlay.classList.add('active');
      //console.log('clickee');
      // btnBurger.removeEventListener('click', openMenu);//removeEventListener ->Удаление события
    };
    const closeMenu = () => { //ф-я удаления классов
      catalog.classList.remove('open');// удаления классов
      overlay.classList.remove('active');// удаления классов
      closeSubMenu();
      //console.log('clickee');
      // btnBurger.removeEventListener('click', openMenu);//removeEventListener ->Удаление события
    };
    const closeSubMenu = () => { //ф-я удаления классов
      subCatalog.classList.remove('subopen');
      // overlay.classList.remove('active');
      //console.log('clickee');
      // btnBurger.removeEventListener('click', openMenu);//removeEventListener ->Удаление события
    };

    const openSubMenu = (event) => { //Ф-я открытия сабменю (у event есть свойства  target->event.target Ссылка на целевой объект, на котором произошло событие.)
      event.preventDefault(); //запрешаем переход надругую страницу
      // const itemList = event.target.closest('.catalog-list__item'); // cоздаем переменную и отслеживаем куда мы кликнули
      //Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), 
      //который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.
      //мы кликали по тегу а Методом closest()ьы перешли к родителю тег li
      const target = event.target;
      const itemList = target.closest('.catalog-list__item');
      if (itemList) { //если мы попали в пункт каталога li
        subCatalog.classList.add('subopen'); //subCatalog добавбяем класс subopen
        subcatalogHeader.innerHTML = itemList.innerHTML; //в сабкаталог-заголовок присваиваем = пункт каталога одного из тегов li по котороу мы кликнули: (itemList = target.closest('.catalog-list__item');)
      };
    };

    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    btnReturn.addEventListener('click', closeSubMenu);

    document.addEventListener('keydown', (event) => { //на  document отлавливаем событие keydown и отлавливаем событие на клавиатуре
      console.log(event);
      if (event.code === 'Escape') { //если код клавиши равен клавише Escape-> Esc то запусти ф-ю closeMenu() закрой меню
        closeMenu();
      };
    });

    catalogList.addEventListener('click', openSubMenu);
  };

export const data = {//Экспортируем переменную в файл index.js
  a: 10,
  b: "string"
};

//Экспорт по дефолту: export default ...Названине функции