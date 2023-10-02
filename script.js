document.querySelectorAll('a[href="'+document.URL+'"]').forEach(link => link.className += 'current-link');

function openNav() {
  document.getElementById("sidenav").style.width = "220px";
  document.getElementById("close-menu").style.display = "flex";
  document.getElementById("social-links").style.marginLeft = "220px";
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("social-links").style.marginLeft = "0px";
	}

function selectLangRu() {
	
	var langOpacity = document.getElementById("langContainer");
	var actualOpacity = getComputedStyle(langOpacity).opacity;
	
	document.getElementById("langContainer").style.opacity = "1";
	document.getElementById("ruLangEn").style.display = "flex";
	document.getElementById("langContainer").style.marginTop = "35px";
	
	if (actualOpacity == "1") {
		langOpacity.style.opacity = "0";
		langOpacity.style.marginTop = "-35px";
		}
	
	}

function selectLangEn() {
	
	var langOpacity = document.getElementById("langContainer");
	var actualOpacity = getComputedStyle(langOpacity).opacity;
	
	document.getElementById("langContainer").style.opacity = "1";
	document.getElementById("enLangRu").style.display = "flex";
	document.getElementById("langContainer").style.marginTop = "35px";
	
	if (actualOpacity == "1") {
		langOpacity.style.opacity = "0";
		langOpacity.style.marginTop = "-35px";
		}
	
	}

if(window.innerHeight > window.innerWidth){

	function openNav() {
		document.getElementById("sidenav").style.width = "100%";
		document.getElementById("sidenav").style.textAlign = "center";
		document.getElementById("ruLangRu").style.zIndex = "998";
		document.getElementById("close-menu").style.display = "flex";
		document.getElementById("close-menu").style.left = "calc(50% - 16px)";
		}
		
	function closeNav() {
		document.getElementById("ruLangRu").style.zIndex = "999";
		document.getElementById("sidenav").style.width = "0px";
		document.getElementById("open-menu").style.display = "flex";
		document.getElementById("social-links").style.marginLeft = "0px";
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
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("footer").style.background = "#212120";

    var social = document.getElementsByClassName("social-link");
    var count;
    for (count = 0; count < social.length; count++) {
		social[count].style.margin = "5px";
		social[count].style.width = "30px";
		social[count].style.height = "30px";
		}

	}
