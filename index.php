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
    <title>Konstantin Protzen</title>
    <link rel="icon" type="image/x-icon" href="/res/img/favicon.ico" />
    <link rel="stylesheet" href="/res/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="/res/fontawesome/css/brands.min.css">
    <link rel="stylesheet" href="/res/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="/res/css/fonts.css">
    <link rel="stylesheet" href="/res/css/main.css">
    <link rel="stylesheet" href="/res/css/theme.css">
    <link rel="stylesheet" href="/res/css/grid.css">
    <link rel="stylesheet" href="/res/css/slides.css">
    <link rel="stylesheet" href="/res/css/smaller.css">
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
                    <img src="/res/img/logo-transparent.png" alt="Logo">
                </div>
                <div class="profile-title">
                    <div>
                        <h1>Konstantin<br>Protzen</h1>
                        <p>Webdevelopment | UI/UX Design</p>
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
                        <h2>Webdevelopment | UI/UX Design</h2>
                    </div>
                </div>
                <div class="slide slide-hide_by_default" id="slide-aboutme">
                    <div class="about_me-top">
                        <div class="aboutme-title">
                            <h1>About <span class="accent-text">Me</span></h1>
                        </div>
                        <div class="aboutme-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit animi, dolorum maxime impedit consequatur atque. Molestias blanditiis laboriosam, beatae maxime ducimus earum magni adipisci fugiat.
                        </div>
                        <div class="aboutme-facts">
                            <span class="accent-text">E-Mail</span><span class="aboutme-fact"><?= CUSTOM_VALUE_EMAIL ?></span><br>
                            <span class="accent-text">Phone</span><span class="aboutme-fact"><?= CUSTOM_VALUE_PHONE ?></span><br>
                            <span class="accent-text">Residence</span><span class="aboutme-fact">Germany</span><br>
                        </div>
                    </div>
                </div>
                <div class="slide slide-hide_by_default" id="slide-education">
                    <div>
                        <div class="education-title">
                            <h1>My <span class="accent-text">skills</span></h1>
                        </div>
                        <div class="education-skills_table">
                            <div class="education-core_skills">
                                <h2 class="skills-tablerow-title">Core skills</h2>
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
                            <div class="education-other_skills">
                                <h2 class="skills-tablerow-title">Other skills</h2>
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
                    <div>
                        <div class="careerpath-title">
                            <h1>Career <span class="accent-text">Path</span></h1>
                        </div>
                        <div class="careerpath">
                            <div class="careerpath-school">
                                <span class="work-title">
                                    <h3 class="accent-text">Wissler &amp; Protzen</h3> (2022 - <span class="accent-text">Today</span>)
                                </span>
                                <ul class="work-details">
                                    <li>Technical Support</li>
                                    <li>Property Tax</li>
                                    <li>Accounting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="educationpath-title">
                            <h1>School <span class="accent-text">Path</span></h1>
                        </div>
                        <div class="educationpath">
                            <div class="educationpath-school">
                                <span class="school-title">
                                    <h3 class="accent-text">Secondary School</h3> (2017 - 2023)
                                </span>
                                <div class="school-details">
                                    <p>Gymnasium Hohenbaden - Altsprachlich Humanistisches Gymnasium</p>
                                    <p>Baden-Baden, Germany</p>
                                </div>
                            </div>
                            <div class="educationpath-school">
                                <span class="school-title">
                                    <h3 class="accent-text">Primary School</h3> (2013 - 2017)
                                </span>
                                <div class="school-details">
                                    <p>Klosterschule Lichtental</p>
                                    <p>Lichtental Baden-Baden, Germany</p>
                                </div>
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