<?

//Обработка запросов

$id = $_GET['id']; //id
    if ($id == 2) $desc = "Подписка на 7 дней";
    if ($id == 1) $desc = "Подписка на 14 дней";
    if ($id == 0) $desc = "Подписка на 30 дней";

$vk = $_GET['vk']; //vk

$em = $_GET['email']; //email

$file = "clientn.txt";

$counter = file_get_contents($file);

echo $id.$vk.$em;

//Оправка на почту

$msg = "На сколько: ".$desc."\r VK: ".$vk."\r EMAIL: ".$em."ГОТОВО! Клиент ".$counter." по счёту";

if ( mail('teepsyk@gmail.com', 'ПОДПИСКА DOUBLEMONEY №'.$counter, $msg) ) {
    
    echo $counter;
    
    file_put_contents($file, $counter+1);
    
    //header('location: https://primearea.biz/buy/14940'.$id.'/');
    
} else {
    
    echo "Неудача!";
    
}