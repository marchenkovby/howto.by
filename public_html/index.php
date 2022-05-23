<?php

// trim -  удаляет пробелы (или другие символы) из начала и конца строки, в данном случае удаляем символ /
// empty - проверяет, пуста ли переменная
// file_exists - проверяет существование указанного файла или каталога
// ob_start - включает буферизацию вывода
// ob_get_clean — получает содержимое текущего буфера и удаляет его
// require - включает и выполняет указанный файл, отличие от include в том,
// что в случае ошибки будет остановлена выполнение скрипта
// include - включает и выполняет указанный файл
// extract - импортирует переменные из массива в текущую таблицу символов
/*

$route = !empty($_GET['route']) ? $_GET['route'] : 'index';

$var = condition ? exp1 : exp2;
Если условие выполняется, то переменной $var присваивается результат вычисления exp1, иначе exp2.

*/

$route = trim(!empty($_GET['route']) ? $_GET['route'] : 'index', '/');

$file = "../content/$route";
$file = file_exists("$file.php") ? "$file.php" : '../content/404.php';

file_exists('../app/functions.php') and require '../app/functions.php';

ob_start();

$data = require $file;
$content = ob_get_clean();

extract($data ?: []);

include '../app/template.php';
