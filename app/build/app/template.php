<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title><?php isset($title) and print($title) ?></title>
    <meta name="description" content="<?php isset($desk) and print($desk) ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="yandex-verification" content="d2a5f759beec076d">
    <meta name="google-site-verification" content="XddfCalGWjgBroXxc_ll1yuyg4YFdqbaqtSi8kl6CDg">
    <link rel="stylesheet" href="/styles/styles.css?v=1.0.4">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <link rel="manifest" href="/icons/site.webmanifest">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="msapplication-TileColor" content="#2c3e50">
    <meta name="msapplication-config" content="/icons/browserconfig.xml">
    <meta name="theme-color" content="#2c3e50">
    <meta property="og:title" content="<?php isset($title) and print($title) ?>">
    <meta property="og:description" content="<?php isset($desk) and print($desk) ?>">
    <meta property="og:image" content="<?php isset($og_image) and print($og_image) ?>">
    <meta property="og:site_name" content="<?php isset($og_site_name) and print($og_site_name) ?>">
    <meta property="og:type" content="<?php isset($og_type) and print($og_type) ?>">
  </head>
  <body>
    <div class="page">
      <div class="page__inner">
        <header class="main-header page__main-header">
          <div class="logo"><a class="logo__link" href="/">howto.<?php if ($development) echo 'test'; ?></a></div>
        </header>
<?php if ($breadcrumbs) { ?>
        <nav class="breadcrumbs page__breadcrumbs">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/">Главная</a></li>
            <li class="breadcrumbs__item"><?php echo $title; ?></li>
          </ul>
        </nav>
<?php } ?>
        <main class="main-content page__main-content">
<?php echo $content ?>
<?php if ($comments) { ?>
          <div class="comments main-content__comments">
            <p class="comments__paragraph">У вас есть вопрос? Заметили ошибку? Пишите в телеграм <a class="comments__link" href="https://t.me/howtoby" target="_blank">t.me/howtoby</a>.</p>
          </div>
<?php } ?>
        </main>
        <footer class="main-footer page__main-footer">
            <p class="main-footer__paragraph">&#169; <a class="main-footer__link" href="https://marchenkov.by" target="_blank">Максим Марченков</a> 2019-<?php echo date("Y");?></p>
        </footer>
    </div>
  </div>
<?php if ($scripts) { ?>
  <script src="/scripts/yandex_metrika.js"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134999112-2"></script>
  <script src="/scripts/google_analytics.js"></script>
<?php } ?>
  </body>
</html>
