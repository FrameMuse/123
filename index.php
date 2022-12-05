<?
/*
* Скрипт защищен авторским правом и полностью принадлежит FrameMuse (Валерий Зинченко).

* Сделано специально для Free-Skinz.com

 - AfterStudio
*/
include "tmen.php";

if (file_exists("engine") && file_exists("framemuse.author")) {
    define("FS_USE_ENGINE", true);
    require "engine/core.php";
} else {
    echo "<h1>Основной Католог Отсутствует На Сервере(Или Автор).</h1>";
}