<?php

// Get the no-github values
require_once("no-github.php");

?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konstantin Protzen | Webdevelopment und Design - made in Germany</title>
    <!-- Stylesheets -->
    <link rel="stylesheet" href="/res/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="/res/fontawesome/css/brands.min.css">
    <link rel="stylesheet" href="/res/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="/res/css/fonts.css">
    <link rel="stylesheet" href="/res/css/main.css">
    <link rel="stylesheet" href="/res/css/theme.css">
    <link rel="stylesheet" href="/res/css/grid.css">
    <link rel="stylesheet" href="/res/css/slides.css">
    <link rel="stylesheet" href="/res/css/smaller.css">
    <!-- OpenGraph tags -->
    <meta property="og:url" content="https://konstantin-protzen.de/">
    <meta property="twitter:url" content="https://konstantin-protzen.de/">
    <meta property="twitter:domain" content="konstantin-protzen.de">
    <meta property="og:title" content="Konstantin Protzen">
    <meta name="twitter:title" content="Konstantin Protzen">
    <meta property="og:description" content="Webdevelopment | UI/UX Design">
    <meta name="twitter:description" content="Webdevelopment | UI/UX Design">
    <meta property="og:image" content="https://konstantin-protzen.de/res/img/logo-transparent.png">
    <meta name="twitter:image" content="https://konstantin-protzen.de/res/img/logo-transparent.png">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="description" content="Hi, Ich bin Konstantin Protzen, ein Full-Stack-Webentwickler und UI/UX-Designer.">
    <meta name="keywords" content="Konstantin Protzen, Konstantin, Protzen, Webdevelopment, Webentwicklung, Web, Development, Entwickler, Designer, UI, UX, Design, Full-Stack, Fullstack, Full, Stack, Full-Stack-Developer, Full-Stack-Entwickler, Full-Stack-Design, Deutschland, Germany, DE, DEU, DEU, DACH">
    <meta name="author" content="Konstantin Protzen">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="google" content="notranslate">
    <!-- Icons / Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/res/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/res/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="194x194" href="/res/img/favicon-194x194.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/res/img/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/res/img/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/res/img/safari-pinned-tab.svg" color="#eb660e">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="msapplication-TileImage" content="/res/img/mstile-144x144.png">
    <meta name="msapplication-config" content="/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
</head>

<body>
    <a href="#" id="themeswitch" onclick="cycleTheme();">
        <div>
            <i class="fas fa-adjust"></i>
        </div>
    </a>
    <main>
        <div class="main-categories">
            <i onclick="switchSlide(1);" class="fa-solid fa-house" id="category_opener-home" style="color:var(--accent2-color);"></i>
            <i onclick="switchSlide(2);" class="fa-solid fa-user" id="category_opener-aboutme"></i>
            <i onclick="switchSlide(3);" class="fa-solid fa-bars-progress" id="category_opener-portfolio"></i>
            <i onclick="switchSlide(4);" class="fa-solid fa-graduation-cap" id="category_opener-education"></i>
            <i id="mail-button" onclick="location.assign('mailto:<?= CUSTOM_VALUE_EMAIL ?>');" class="fa-solid fa-envelope"></i>
        </div>
        <div class="main-arrows">
            <i onclick="nextSlide();" id="arrow_up" class="fa-solid fa-angle-up arrow_nohover"></i>
            <i onclick="lastSlide();" id="arrow_down" class="fa-solid fa-angle-down"></i>
        </div>
        <div class="main-mainview">
            <div class="main-profile">
                <div class="profile-image">
                    <img src="/res/img/logo-transparent.webp" alt="Logo">
                </div>
                <div class="profile-title">
                    <div>
                        <h1>Konstantin<br>Protzen</h1>
                        <p>Webentwicklung | UI/UX Design</p>
                    </div>
                </div>
                <div class="profile-socials">
                    <i onclick="window.open('<?= CUSTOM_VALUE_LINK_GITHUB ?>', '_blank');" class="fa-brands fa-github"></i>
                    <i onclick="window.open('<?= CUSTOM_VALUE_LINK_MASTODON ?>', '_blank');" class="fa-brands fa-mastodon"></i>
                    <i onclick="window.open('<?= CUSTOM_VALUE_LINK_DISCORD ?>', '_blank');" class="fa-brands fa-discord"></i>
                    <i onclick="window.open('<?= CUSTOM_VALUE_LINK_STEAM ?>', '_blank');" class="fa-brands fa-steam"></i>
                </div>
            </div>
            <div class="main-slides">
                <div class="slide" id="slide-home">
                    <div>
                        <h1>Konstantin Protzen</h1>
                        <h2>Webentwicklung | UI/UX Design</h2>
                    </div>
                </div>
                <div class="slide slide-hide_by_default" id="slide-aboutme">
                    <div class="about_me-top">
                        <div class="aboutme-title">
                            <h1>Über <span class="accent-text">mich</span></h1>
                        </div>
                        <div class="aboutme-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit animi, dolorum maxime impedit consequatur atque. Molestias blanditiis laboriosam, beatae maxime ducimus earum magni adipisci fugiat.
                        </div>
                        <div class="aboutme-facts">
                            <span class="accent-text"><i class="fa-solid fa-at"></i></span><span class="aboutme-fact"><?= CUSTOM_VALUE_EMAIL ?></span><br>
                            <span class="accent-text"><i class="fa-solid fa-phone"></i></span><span class="aboutme-fact"><?= CUSTOM_VALUE_PHONE ?></span><br>
                            <span class="accent-text"><i class="fa-solid fa-location-pin"></i></span><span class="aboutme-fact">Germany</span><br>
                        </div>
                    </div>
                </div>
                <div class="slide slide-hide_by_default" id="slide-portfolio">
                    <div>
                        <div class="portfolio-title">
                            <h1>Meine <span class="accent-text">F&auml;higkeiten</span></h1>
                        </div>
                        <div class="portfolio-skills_table">
                            <div class="portfolio-core_skills">
                                <h2 class="skills-tablerow-title">Hauptf&auml;higkeiten</h2>
                                <div class="skill_list-wrapper">
                                    <p>Javascript</p>
                                    <p>CSS3</p>
                                    <p>HTML5</p>
                                    <p>PHP</p>
                                    <p>JQuery</p>
                                    <p>node.js</p>
                                    <p>expressjs</p>
                                    <p>MariaDB</p>
                                    <p>MySQL</p>
                                </div>
                            </div>
                            <div class="portfolio-other_skills">
                                <h2 class="skills-tablerow-title">Sonstige F&auml;higkeiten</h2>
                                <div class="skill_list-wrapper">
                                    <p>Wordpress</p>
                                    <p>Unity</p>
                                    <p>Joomla!3</p>
                                    <p>Joomla!4</p>
                                    <p>Git</p>
                                    <p>Blender</p>
                                    <p>Python</p>
                                    <p>Grafana</p>
                                    <p>Bootstrap</p>
                                    <p>Chart.js</p>
                                    <p>C++</p>
                                    <p>Unity</p>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide slide-hide_by_default" id="slide-education">
                    <div>
                        <div class="careerpath-title">
                            <h1><span class="accent-text">Karriere</span>weg</h1>
                        </div>
                        <div class="careerpath">
                            <div class="careerpath-school">
                                <span class="work-title">
                                    <h3 class="accent-text">Wissler &amp; Protzen</h3> (Seit 2022)
                                </span>
                                <ul class="work-details">
                                    <li>Technische Unterstützung</li>
                                    <li>Grundsteuer</li>
                                    <li>Buchhaltung</li>
                                    <li>Website</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="educationpath-title">
                            <h1><span class="accent-text">Schul</span>weg</h1>
                        </div>
                        <div class="educationpath">
                            <div class="educationpath-school">
                                <span class="school-title">
                                    <h3 class="accent-text">Weiterf&uuml;hrende Schule</h3> (2017 - 2023)
                                </span>
                                <div class="school-details">
                                    <p>Gymnasium Hohenbaden - Altsprachlich Humanistisches Gymnasium</p>
                                    <p>Baden-Baden, Deutschland</p>
                                </div>
                            </div>
                            <div class="educationpath-school">
                                <span class="school-title">
                                    <h3 class="accent-text">Grundschule</h3> (2013 - 2017)
                                </span>
                                <div class="school-details">
                                    <p>Klosterschule Lichtental</p>
                                    <p>Lichtental Baden-Baden, Deutschland</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="careerpath-title">
                            <h1>Sonstige <span class="accent-text">T&auml;tigkeiten</span></h1>
                        </div>
                        <div class="careerpath">
                            <div class="careerpath-school">
                                <span class="work-title">
                                    <h3 class="accent-text">Mitglied der SMV am Gymnasium Hohenbaden</h3> (Seit 2018)
                                </span>
                                <ul class="work-details">
                                    <li>Protokollf&uuml;hrung</li>
                                    <li>Aktionsplanung</li>
                                    <li>Interessensvertretung</li>
                                    <li>Alltagskoordination</li>
                                </ul>
                            </div>
                            <div class="careerpath-school">
                                <span class="work-title">
                                    <h3 class="accent-text">Jugendsprecher Baden-Baden</h3> (Seit 2023)
                                </span>
                                <ul class="work-details">
                                    <li>Protokollf&uuml;hrung</li>
                                    <li>Politisches Engagment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="/res/js/themes/themes.js"></script>
    <script src="/res/js/slides.js"></script>
    <script src="/res/js/debug.js"></script>
    <script src="/res/js/shuffleskills.js"></script>
    <script src="/res/js/smaller.js"></script>
</body>

</html>