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
</head>

<body>
    <a href="#" id="themeswitch" onclick="cycleTheme();">
        <div>
            <i class="fas fa-adjust"></i>
        </div>
    </a>
    <main>
        <div class="main-categories">
            <i onclick="switchSlide(1);" class="fa-solid fa-house"></i>
            <i onclick="switchSlide(2);" class="fa-solid fa-user"></i>
            <i onclick="switchSlide(3);" class="fa-solid fa-bars-progress"></i>
            <i onclick="switchSlide(4);" class="fa-solid fa-graduation-cap"></i>
            <i onclick="location.assign('mailto:<?=CUSTOM_VALUE_EMAIL?>');" class="fa-solid fa-envelope"></i>
        </div>
        <div class="main-arrows">
            <i onclick="nextSlide();" id="arrow_up" class="fa-solid fa-angle-up arrow_nohover"></i>
            <i onclick="lastSlide();" id="arrow_down" class="fa-solid fa-angle-down"></i>
        </div>
        <div class="main-mainview">
            <div class="main-profile">
                <div class="profile-image">
                    <img src="/logo.png" alt="Logo">
                </div>
                <div class="profile-title">
                    <div>
                        <h1>Konstantin<br>Protzen</h1>
                        <p>Webdevelopment | UI/UX Design</p>
                    </div>
                </div>
                <div class="profile-socials">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-steam"></i>
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
                            <span class="accent-text">E-Mail</span><span class="aboutme-fact"><?=CUSTOM_VALUE_EMAIL?></span><br>
                            <span class="accent-text">Phone</span><span class="aboutme-fact"><?=CUSTOM_VALUE_PHONE?></span><br>
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
                </div>
            </div>
        </div>
    </main>
    <script src="/res/js/themes/themes.js"></script>
    <script src="/res/js/slides.js"></script>
    <script src="/res/js/debug.js"></script>
    <script src="/res/js/shuffleskills.js"></script>
</body>

</html>