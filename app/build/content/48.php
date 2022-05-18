<!-- build:remove--><!DOCTYPE html>
<html>
  <head lang="ru">
    <meta charset="utf-8">
    <title><?php isset($title) and print($title) ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/styles/styles.css?v=20220518164008">
  </head>
  <body>
    <div class="page">
      <div class="page__inner">
        <header class="main-header page__main-header">
          <div class="logo"><a class="logo__link logo__link--development" href="/">howto.by</a></div>
        </header>
        <nav class="breadcrumbs page__breadcrumbs">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/">Главная</a></li>
            <li class="breadcrumbs__item">Как проверить скорость интернета</li>
          </ul>
        </nav>
        <main class="main-content page__main-content"> 
          <!-- endbuild-->
          <article class="article main-content__article">
            <header class="article__header">
              <h1 class="artilce__heading article__heading--level-1">Как проверить скорость интернета</h1>
              <figure class="article__figure"><img class="article__image" src="/images/4801.jpg" alt="Проверка скорости интернета на ноутбуке"></figure>
              <p class="article__desk">В статье я вам расскажу о том, как правильно проверить скорость интернета.</p>
            </header>
            <div class="article__content">
              <blockquote class="article__note">
                <p class="article__paragraph"><strong class="article__strong">Примечание.</strong></p>
                <ul class="article__list">
                  <li class="article__list-item">Подключитесь к модему напрямую без дополнительного оборудования.</li>
                  <li class="article__list-item">Закройте все активные программы, в том числе антивирус, остановите закачки. Обязательно убедитесь, что программы действительно закрыты, так как иногда они сворачиваются в область уведомлений, а не закрываются.</li>
                  <li class="article__list-item">Отключите от модема другие устройства, которые могут потреблять интернет-трафик.</li>
                  <li class="article__list-item">Используйте браузер без запущенных онлайн-игр, трансляций и других "тяжелых вкладок". Для проверки скорости используйте популярные браузеры: Chrome, Firefox, Opera, Safari или Microsoft Edge.</li>
                </ul>
              </blockquote>
              <ol class="article__steps">
                <li class="article__steps-item">
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Соедините модем с вашим компьютером</h2>
                  <p class="article__paragraph">Используйте сетевой кабель, соединив им порт 1 на модеме и порт на сетевой карте вашего компьютера.</p>
                  <figure class="article__figure"><img class="article__image" src="/images/4802.jpg" alt="Проводное соединение через сетевой кабель модема ZTE ZXHN F609 и ноутбука"></figure>
                </li>
                <li class="article__steps-item">
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Зайдите на сайт для проверки скорости</h2>
                  <ol class="article__steps">
                    <li class="article__steps-item">Зайдите на сайт <strong class="article__strong"><a class="article__link" href="https://speedtest.net" target="_blank">https://speedtest.net</a></strong>.</li>
                    <li class="article__steps-item">Нажмите на кнопку <strong class="article__strong">Начать</strong> или <strong class="article__strong">GO</strong>.</li>
                  </ol>
                  <figure class="article__figure"><img class="article__image" src="/images/4803.png" alt="Окно браузера с кнопкой для начала проверки скорости"></figure>
                </li>
                <li class="article__steps-item">
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Проверьте скорость интернета</h2>
                  <figure class="article__figure"><img class="article__image" src="/images/4804.png" alt="Результаты проверки скорости в браузере на сайте speedtest.net"></figure>
                  <p class="article__paragraph">В данном примере имеем пакет услуг ЯСНА 100, согласно тарифного плана скорость скачивания должна быть 100 Мбит/с, скорость загрузки 50 Мбит/с. По результатам тестирования скорость соответствует заявленной.</p>
                  <p class="article__paragraph">Таблица с параметрами качества услуг от Белтелекома находится здесь <a class="article__link" href="http://byfly.by/client/poryadok" target="_blank">http://byfly.by/client/poryadok</a> (раздел 1.5.1).</p>
                  <div class="article__table-responsive">
                    <table class="article__table">
                      <thead class="article__table-head">
                        <tr class="article__table-row">
                          <th class="article__table-cell article__table-cell--heading">Параметр</th>
                          <th class="article__table-cell article__table-cell--heading">Описание</th>
                        </tr>
                      </thead>
                      <tbody class="artilce__table-body">
                        <tr class="article__table-row">
                          <td class="article__table-cell">Скачать</td>
                          <td class="article__table-cell">Скорость входящего соединения, влияет на то, как быстро открываются сайты и скачиваются файлы.</td>
                        </tr>
                        <tr class="article__table-row">
                          <td class="article__table-cell">Загрузить</td>
                          <td class="article__table-cell">Скорость исходящего соединения, используется при передаче данных с вашего компьютера в сеть, например, при отправке писем или загрузке фотографий в облако.</td>
                        </tr>
                        <tr class="article__table-row">
                          <td class="article__table-cell">Ping</td>
                          <td class="article__table-cell">Задержка сигнала, количество времени за которое сигнал проходит от вашего устройства до сервера. Чем меньше, тем лучше.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <blockquote class="article__note">
                    <p class="article__paragraph"><strong class="article__strong">Примечание.</strong> Интернет-провайдеры измеряют скорость интернет-соединения в мегабитах (Мбит/с или Мб/с). Браузеры, торрент-клиенты и другие программы измеряют скорость в мегабайтах (Мбайт/с или МБ/с). 1 мегабайт = 8 мегабит.</p>
                  </blockquote>
                </li>
              </ol>
            </div>
          </article>
          <!-- build:remove-->
          <div class="comments main-content__comments">
            <p class="comments__paragraph">У вас есть вопрос? Заметили ошибку? Пишите в телеграм <a class="comments__link" href="https://t.me/howtoby" target="_blank">t.me/howtoby</a>.</p>
          </div>
        </main>
        <footer class="main-footer page__main-footer">
          <p class="main-footer__paragraph">(c) <a class="main-footer__link" href="https://marchenkov.by" target="_blank">Максим Марченков</a> 2019-2021</p>
        </footer>
      </div>
    </div>
  </body>
</html>
<!-- endbuild--><?php
return [
 'title' => 'Как проверить скорость интернета',
 'desk'  => 'В статье я вам расскажу о том, как правильно проверить скорость интернета.',
 'og_image'  => 'https://howto.by/images/4801.jpg'
];