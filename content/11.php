          <article class="article main-content__article">
            <header class="article__header">
              <h1 class="article__heading article__heading--level-1">Как настроить охрану на GPON-модеме Huawei EchoLife HG8245HV5</h1>
              <figure class="article__figure"><img class="article__image" src="/images/1103.jpg" alt="Внешний вид GPON-модема Huawei EchoLife HG8245HV5"></figure>
              <p class="article__desk">В статье я вам расскажу о том, как настроить охрану на GPON-модеме Huawei EchoLife HG8245HV5</p>
            </header>
            <div class="article__content">
              <p class="article__paragraph">Итак, необходимо выполнить следующие действия:</p>
              <ol class="article__steps">
                <li class="article__steps-item">
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Соедините GPON-модем с вашим компьютером</h2>
                  <p class="article__paragraph">Для подключения через проводное соединение используйте сетевой кабель, соединив им порт 1 на GPON-модеме и порт на сетевой карте вашего компьютера.</p>
                  <figure class="article__figure"><img class="article__image" src="/images/1102.jpg" alt="Проводное соединение через сетевой кабель GPON-модема Huawei EchoLife HG8245HV5 и ноутбука"></figure>
                  <p class="article__paragraph">Для подключения через беспроводное соединение вы должны быть подключены к сети Wi-Fi вашего GPON-модема.</p>
                </li>
                <li class="article__steps-item">
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Зайдите в настройки GPON-модема</h2>
                  <ol class="article__steps">
                    <li class="article__steps-item">Откройте любой браузер. В адресной строке перейдите по ip-адресу <a class="article__link" href="http://192.168.100.1" target="_blank"><strong class="article__strong">192.168.100.1</strong></a>.</li>
                    <li class="article__steps-item">Откроется окно авторизации. Введите логин <strong class="article__strong">telecomadmin</strong>, пароль <strong class="article__strong">admintelecom</strong> и нажмите на кнопку <strong class="article__strong">Login</strong>.</li>
                  </ol>
                  <figure class="article__figure"><img class="article__image" src="/images/1103.png" alt="Вход в настройки GPON-модема Huawei EchoLife HG8245HV5"></figure>
                </li>
                <li class="article__steps-item"> 
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Перейдите во вкладку WAN</h2>
                  <p class="article__paragraph">После авторизации откроется главное меню GPON-модема. Вам необходимо перейти во вкладку <strong class="article__strong">WAN</strong>.</p>
                  <figure class="article__figure"><img class="article__image" src="/images/1104.png" alt="Вкладка Status на GPON-модеме Huawei EchoLife HG8245HV5"></figure>
                </li>
                <li class="article__steps-item"> 
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Выберите подключение для интернета</h2>
                  <p class="article__paragraph">Во вкладке <strong class="article__strong">WAN</strong> выберите поле <strong class="article__strong">4_INTERNET_R_VID_10</strong>.</p>
                  <figure class="article__figure"><img class="article__image" src="/images/1105.png" alt="Вкладка WAN на GPON-модеме Huawei EchoLife HG8245HV5"></figure>
                </li>
                <li class="article__steps-item"> 
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Выберите нужный порт</h2>
                  <ol class="article__steps">
                    <li class="article__steps-item">В поле <strong class="article__strong">Binding Options</strong> уберите галочки с порта, на котором будете настраивать охрану.</li>
                    <li class="article__steps-item">Нажмите <strong class="article__strong">Apply</strong> для сохранения настроек.</li>
                  </ol>
                  <figure class="article__figure"><img class="article__image" src="/images/1106.png" alt="Вкладка WAN на GPON-модеме Huawei EchoLife HG8245HV5"></figure>
                </li>
                <li class="article__steps-item"> 
                  <h2 class="article__heading article__heading--level-2 article__heading--step">Создайте новое подключение для охраны</h2>
                  <ol class="article__steps">
                    <li class="article__steps-item">Нажмите на кнопку <strong class="article__strong">New</strong>.</li>
                    <li class="article__steps-item">В поле <strong class="article__strong">WAN Mode</strong> выберите <strong class="article__strong">Bridge WAN</strong>.</li>
                    <li class="article__steps-item">В поле <strong class="article__strong">Service Type</strong> выберите <strong class="article__strong">OTHER</strong>.</li>
                    <li class="article__steps-item">В поле <strong class="article__strong">VLAN ID</strong> введите <strong class="article__strong">60</strong>.</li>
                    <li class="article__steps-item">В поле <strong class="article__strong">802.1p</strong> выберите <strong class="article__strong">5</strong>.</li>
                    <li class="article__steps-item">В поле  <strong class="article__strong">Binding Options</strong> отмечаем порт, через которые будет работать оборудование для охраны.</li>
                    <li class="article__steps-item">Нажмите <strong class="article__strong">Apply</strong> для сохранения настроек.</li>
                  </ol>
                  <figure class="article__figure"><img class="article__image" src="/images/1107.png" alt="Создание нового подключения на GPON-модеме Huawei EchoLife HG8245HV5"></figure>
                </li>
              </ol>
            </div>
          </article>
<?php
return [
 'title' => 'Как настроить охрану на GPON-модеме Huawei EchoLife HG8245HV5',
 'desk'  => 'В статье я вам расскажу о том, как настроить охрану на GPON-модеме Huawei EchoLife HG8245HV5',
 'og_image'  => 'https://howto.by/images/1103.jpg'
];