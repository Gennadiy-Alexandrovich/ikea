'use srtict';
import {data} from './catalog.js';//Пример импорта переменной data из файла catalog.js в котрой лежит обьект
console.log(data);

import {catalog} from './catalog.js';//Импортируем файл (чтобы импортировать надо в файле index.html в теге <script добавить : type = "module"> )

import generateHeader from './generateHeader.js'; //имрортируем ф-ю generateHeader из  ./generateCatalog и вызываем её
import generateFooter from './generateFooter.js'; //имрортируем ф-ю generateFooter из  ./generateCatalog и вызываем её
import generateCatalog from './generateCatalog.js'; //имрортируем ф-ю generateCatalog из  ./generateCatalog и вызываем её
import generateSubCatalog from './generateSubCatalog.js'; //имрортируем ф-ю generateSubCatalog из  ./generateCatalog и вызываем её
import { loadData } from './loadData.js';

generateHeader();//Вызываем все импортируемые ф-ии
generateFooter();
generateCatalog();
generateSubCatalog();
catalog();
loadData();

