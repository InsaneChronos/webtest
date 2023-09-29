document.querySelectorAll('a[href="'+document.URL+'"]').forEach(link => link.className += 'current-link');

function openNav() {
  document.getElementById("sidenav").style.width = "220px";
  document.getElementById("close-menu").style.display = "flex";
  document.getElementById("social").style.marginLeft = "220px";
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("social").style.marginLeft = "0px";
	}

function selectLangRu() {
	
	var langOpacity = document.getElementById("langContainer");
	var actualOpacity = getComputedStyle(langOpacity).opacity;
	
	document.getElementById("langContainer").style.opacity = "1";
	document.getElementById("ruLangEn").style.display = "flex";
	document.getElementById("langContainer").style.marginTop = "40px";
	
	if (actualOpacity == "1") {
		langOpacity.style.opacity = "0";
		langOpacity.style.marginTop = "-40px";
		}
	
	}

function selectLangEn() {
	
	var langOpacity = document.getElementById("langContainer");
	var actualOpacity = getComputedStyle(langOpacity).opacity;
	
	document.getElementById("langContainer").style.opacity = "1";
	document.getElementById("enLangRu").style.display = "flex";
	document.getElementById("langContainer").style.marginTop = "40px";
	
	if (actualOpacity == "1") {
		langOpacity.style.opacity = "0";
		langOpacity.style.marginTop = "-40px";
		}
	
	}

if(window.innerHeight > window.innerWidth){
	function openNav() {
		document.getElementById("sidenav").style.width = "100%";
		document.getElementById("sidenav").style.textAlign = "center";
		document.getElementById("ruLangRu").style.zIndex = "998";
		document.getElementById("close-menu").style.display = "flex";
		}
	}
