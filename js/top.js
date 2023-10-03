function openNav() {
	document.getElementById("sidenav").style.width = "220px";
	document.getElementById("close-menu").style.display = "flex";
	document.getElementById("social-links-1").style.marginLeft = "220px";
	document.getElementById("social-links-2").style.marginLeft = "220px";
	}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("social-links-1").style.marginLeft = "0px";
	document.getElementById("social-links-2").style.marginLeft = "0px";
	}

function selectLang() {

	var langOpacity = document.getElementById("langContainer");
	var actualOpacity = getComputedStyle(langOpacity).opacity;

	document.getElementById("langContainer").style.opacity = "1";
	document.getElementById("secondLang").style.display = "flex";
	document.getElementById("langContainer").style.marginTop = "35px";

	if (actualOpacity == "1") {
		langOpacity.style.opacity = "0";
		langOpacity.style.marginTop = "-35px";
		}

	}

if (window.innerHeight > window.innerWidth){

	function openNav() {
		document.getElementById("sidenav").style.width = "100%";
		document.getElementById("sidenav").style.textAlign = "center";
		document.getElementById("langSelect").style.zIndex = "998";
		document.getElementById("close-menu").style.display = "flex";
		document.getElementById("close-menu").style.left = "calc(50% - 16px)";
		}

	function closeNav() {
		document.getElementById("langSelect").style.zIndex = "999";
		document.getElementById("sidenav").style.width = "0px";
		document.getElementById("open-menu").style.display = "flex";
		document.getElementById("social-links-1").style.marginLeft = "0px";
		document.getElementById("social-links-2").style.marginLeft = "0px";
		}

	document.getElementById("social-links-1").style.width = "100%";
	document.getElementById("social-links-2").style.width = "100%";
	document.getElementById("social-links-1").style.height = "100%";
	document.getElementById("social-links-2").style.height = "100%";
	document.getElementById("social-links-1").style.position = "relative";
	document.getElementById("social-links-2").style.position = "relative";
	document.getElementById("social-links-1").style.display = "flex";
	document.getElementById("social-links-2").style.display = "flex";
	document.getElementById("social-links-1").style.alignItems = "baseline";
	document.getElementById("social-links-2").style.alignItems = "baseline";
	document.getElementById("social-links-1").style.justifyContent = "center";
	document.getElementById("social-links-2").style.justifyContent = "center";
	document.getElementById("social-links-1").style.alignContent = "flex-end";
	document.getElementById("social-links-2").style.alignContent = "flex-end";
	document.getElementById("social-links-1").style.top = "0px";
	document.getElementById("social-links-2").style.top = "0px";
	document.getElementById("social-links-1").style.left = "0px";
	document.getElementById("social-links-2").style.left = "0px";
	document.getElementById("social-links-1").style.transition = "0s";
	document.getElementById("social-links-2").style.transition = "0s";
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

	document.getElementById("langSelect").style.left = "calc(100% - 70px)";
	document.getElementById("secondLang").style.left = "calc(100% - 70px)";
	document.getElementById("langContainer").style.left = "calc(100% - 94.85px)";

    var social = document.getElementsByClassName("social-link");
    var count;
    for (count = 0; count < social.length; count++) {
		social[count].style.margin = "5px";
		social[count].style.width = "50px";
		social[count].style.height = "50px";
		}

	}
