
<div class="s-guide">
    <h2 align="center" class="inst">Инструкция</h2>
    <p class="p-guide">1) Переходим на сайт <a href="<?=$row_guide['url']?>"><?=$row_guide['guide']?></a></p>
    <p class="p-guide">2) Авторизируемся через Steam</p>
    <p class="p-guide">3) <?=$row_guide['other']?></p>
    <p class="p-guide">4) Вводим код <?=$row2['key']?> и получаем $<?=$row2['count'];?> на счет</p>
    <p class="p-guide">5) Наигрываем нужную сумму</p>
    <p class="p-guide">6) Выводим понравившейся скин</p>
</div>
<img class="guidei" src="<?=$row_guide['img']?>">
<p id="xer">Вступайте в нашу <a  href="https://vk.com/teepsyy" target="_blank">группу Вконтакте</a>, там публикуются сайты с халявой и проходят розыгрыши </p>
<script>
$(document).ready(setTimeout(function(){
    $('html, body').animate({scrollTop: 0},600);
    return false;
}, 200));
</script>