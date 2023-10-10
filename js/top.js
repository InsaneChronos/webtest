var navMargin = document.getElementById("sidenav");
var actualMargin = getComputedStyle(navMargin).marginLeft;

document.getElementById("nuts").addEventListener("mouseover", function() {
	document.getElementById("squirrel").style.display = "block";
	document.getElementById("squirrel").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/squirrel.png) left center no-repeat";
	document.getElementById("squirrel").style.backgroundSize = "auto";
	document.getElementById("squirrel").style.animation = "squirrel 6s steps(39) infinite";
	}
	);

document.getElementById("nuts").addEventListener("mouseout", function() {
	document.getElementById("squirrel").style.display = "none";
	document.getElementById("squirrel").style.background = "none";
	}
	);

function openNav() {

	var navMargin = document.getElementById("sidenav");
	var actualMargin = getComputedStyle(navMargin).marginLeft;

	document.body.style.overflow = "hidden";
	document.getElementById("sidenav").style.marginLeft = "0px";
	document.getElementById("open-menu").style.transform = "rotate(-90deg)";
	document.getElementById("social-links").style.marginLeft = "220px";
	document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-3.svg) center no-repeat";
	document.getElementById("burger").style.backgroundSize = "cover";
	document.getElementById("overlay").style.visibility = "visible";
	document.getElementById("overlay").style.opacity = ".35";
	document.getElementById("merchContainer").style.zIndex = "995";
	document.getElementById("nutsContainer").style.zIndex = "995";

	document.getElementById("burger").addEventListener("mouseover", function() {
		document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-3.svg) center no-repeat";
		document.getElementById("burger").style.backgroundSize = "cover";
		}
		);

	document.getElementById("burger").addEventListener("mouseout", function() {
		document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-3.svg) center no-repeat";
		document.getElementById("burger").style.backgroundSize = "cover";
		}
		);

	if (actualMargin == "0px") {
		navMargin.style.marginLeft = "-220px";
		document.body.style.overflow = "initial";
		document.getElementById("open-menu").style.transform = "rotate(0deg)";
		document.getElementById("social-links").style.marginLeft = "0px";
		document.getElementById("open-menu").style.marginLeft = "0px";
		document.getElementById("overlay").style.visibility = "hidden";
		document.getElementById("overlay").style.opacity = "0";
		document.getElementById("merchContainer").style.zIndex = "999";
		document.getElementById("nutsContainer").style.zIndex = "999";

		document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-2.svg) center no-repeat";
		document.getElementById("burger").style.backgroundSize = "cover";

		document.getElementById("burger").addEventListener("mouseover", function() {
			document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-2.svg) center no-repeat";
			document.getElementById("burger").style.backgroundSize = "cover";
			}
			);

		document.getElementById("burger").addEventListener("mouseout", function() {
			document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-1.svg) center no-repeat";
			document.getElementById("burger").style.backgroundSize = "cover";
			}
			);

		}

	}

function closeNav() {

	document.body.style.overflow = "initial";
	document.getElementById("sidenav").style.marginLeft = "-220px";
	document.getElementById("open-menu").style.transform = "rotate(0deg)";
	document.getElementById("social-links").style.marginLeft = "0px";
	document.getElementById("open-menu").style.marginLeft = "0px";
	document.getElementById("overlay").style.visibility = "hidden";
	document.getElementById("overlay").style.opacity = "0";
	document.getElementById("merchContainer").style.zIndex = "999";
	document.getElementById("nutsContainer").style.zIndex = "999";
	
	document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-1.svg) center no-repeat";
	document.getElementById("burger").style.backgroundSize = "cover";

	document.getElementById("burger").addEventListener("mouseover", function() {
		document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-2.svg) center no-repeat";
		document.getElementById("burger").style.backgroundSize = "cover";
		}
		);

	if (actualMargin == "-220px") {
		document.getElementById("burger").addEventListener("mouseout", function() {
			document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-1.svg) center no-repeat";
			document.getElementById("burger").style.backgroundSize = "cover";
			}
			);

		}

	}

function selectLang() {

	var langOpacity = document.getElementById("langContainer");
	var actualOpacity = getComputedStyle(langOpacity).opacity;

	document.getElementById("langContainer").style.opacity = "1";
	document.getElementById("secondLang").style.display = "flex";
	document.getElementById("langContainer").style.marginTop = "36px";

	if (actualOpacity == "1") {
		langOpacity.style.opacity = "0";
		langOpacity.style.marginTop = "-36px";
		}

	}

if (window.innerHeight > window.innerWidth){

	function openNav() {

		var navMargin = document.getElementById("sidenav");
		var actualMargin = getComputedStyle(navMargin).marginLeft;

		document.getElementById("sidenav").style.marginLeft = "0px";
		document.getElementById("sidenav").style.width = "100%";
		document.getElementById("open-menu").style.transform = "rotate(-90deg)";
		document.getElementById("open-menu").style.transition = "all .25s ease-in";
		document.getElementById("social-links").style.marginLeft = "220px";

		if (actualMargin == "0px") {
			navMargin.style.marginLeft = "-220px";
			document.getElementById("open-menu").style.transform = "rotate(0deg)";
			document.getElementById("social-links").style.marginLeft = "0px";
			document.getElementById("sidenav").style.width = "calc(100% - 220px)";
			}

	}

	document.getElementById("social-links").style.width = "100%";
	document.getElementById("social-links").style.height = "100%";
	document.getElementById("social-links").style.position = "relative";
	document.getElementById("social-links").style.display = "flex";
	document.getElementById("social-links").style.alignItems = "baseline";
	document.getElementById("social-links").style.justifyContent = "center";
	document.getElementById("social-links").style.alignContent = "flex-end";
	document.getElementById("social-links").style.top = "0px";
	document.getElementById("social-links").style.left = "0px";
	document.getElementById("social-links").style.transition = "0s";
	document.getElementById("socialContainer").style.marginBottom = "30px";
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("open-menu").style.left = "15px";
	document.getElementById("ring-1").style.display = "none";
	document.getElementById("ring-2").style.display = "none";
	document.getElementById("ring-3").style.display = "none";
	document.getElementById("newsContainer").style.display = "none";
	document.getElementById("contactsContainer").style.display = "none";
	document.getElementById("musicContainer").style.display = "none";
	document.getElementById("textsContainer").style.display = "none";
	document.getElementById("videoContainer").style.display = "none";
	document.getElementById("photoContainer").style.display = "none";
	document.getElementById("footer").style.background = "#212120";
	document.getElementById("footer").style.zIndex = "900";
	document.getElementById("titleFooter").style.margin = "46px auto 0 auto";
/* 	document.getElementById("langSelect").style.left = "calc(100% - 70px)"; */
/* 	document.getElementById("secondLang").style.left = "calc(100% - 70px)"; */
/* 	document.getElementById("langContainer").style.left = "calc(100% - 94.85px)"; */

    var social = document.getElementsByClassName("social-link");
    var count;
    for (count = 0; count < social.length; count++) {
		social[count].style.margin = "5px";
		social[count].style.width = "50px";
		social[count].style.height = "50px";
		}

	}
