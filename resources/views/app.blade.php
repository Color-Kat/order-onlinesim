<!DOCTYPE html>
<html lang="ru">
<head>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <!-- Title -->
    <title>{{env('APP_NAME')}}</title>

    <!-- KeyWords -->
    <meta name="keywords" content="">

    <!--  Description  -->
    <meta name="description" content="">

    <!--  Webmanifest  -->
    <!--    <link rel="manifest" href="/manifest.webmanifest">-->

    <!--  Icons  -->
    <!--    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">-->
    <!--    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">-->
    <!--    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">-->
    <!--    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#2b2b2b">-->
    <!--    <meta name="msapplication-TileColor" content="#2b2b2b">-->
    <!--    <meta name="theme-color" content="#2b2b2b">-->

    <!-- Open Graph -->
    <!--    <meta property="og:title" content=""/>-->
    <!--    <meta property="og:type" content="website"/>-->
    <!--    <meta property="og:image" content=""/>-->
    <!--    <meta property="og:description"-->
    <!--          content=""/>-->

    <!-- CSRF -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700;900&family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,600&family=Nunito:wght@400;600;700&family=Play:wght@400;700&family=Roboto:wght@300;400;500;700&family=Ubuntu+Mono&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/js/index.tsx'])

</head>
<body>

<div id="app">

</div>

</body>
</html>
