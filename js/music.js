/* ------------------------- DESKTOP VERSION ------------------------- */

currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]');
currentLinks.forEach(link => link.className += 'current-link');

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

function albumSelect() {
	
	var albumSelect = document.getElementById("albumSelect");
	var albumSelect4 = document.getElementById("albumSelect4");
	var albumSelect3 = document.getElementById("albumSelect3");
	var albumSelect2 = document.getElementById("albumSelect2");
	var albumSelect1 = document.getElementById("albumSelect1");
	var moreAlbums = document.getElementById("moreAlbums");
	var albumCover4 = document.getElementById("albumCover4");
	var albumCover3 = document.getElementById("albumCover3");
	var albumCover2 = document.getElementById("albumCover2");
	var albumCover1 = document.getElementById("albumCover1");
	var albumEnTitle3 = document.getElementById("albumEnTitle3");
	var albumEnTitle2 = document.getElementById("albumEnTitle2");
	var albumEnTitle1 = document.getElementById("albumEnTitle1");

	albumSelect.style.zIndex = "0";
	albumSelect4.style.display = "block";
	albumSelect4.style.background = "#242424";
	albumSelect4.style.border = "none";
	albumSelect3.style.display = "block";
	albumSelect3.style.background = "#242424";
	albumSelect3.style.border = "none";
	albumSelect2.style.display = "block";
	albumSelect2.style.background = "#242424";
	albumSelect2.style.border = "none";
	albumSelect1.style.display = "block";
	albumSelect1.style.background = "#242424";
	albumSelect1.style.border = "none";
	albumSelect4.classList.remove("activeAlbum");
	albumSelect3.classList.remove("activeAlbum");
	albumSelect2.classList.remove("activeAlbum");
	albumSelect1.classList.remove("activeAlbum");
	moreAlbums.style.filter = "brightness(105%) sepia(1) saturate(2.5) hue-rotate(350deg)";
	albumCover4.classList.remove("activeCover");
	albumCover3.classList.remove("activeCover");
	albumCover2.classList.remove("activeCover");
	albumCover1.classList.remove("activeCover");
	moreAlbums.setAttribute("onclick","albumSelect4()");
	albumEnTitle3.style.setProperty("color", "#6F6F6F");
	albumEnTitle2.style.setProperty("color", "#6F6F6F");
	albumEnTitle1.style.setProperty("color", "#6F6F6F");

	}

function albumSelect4() {
	
	var albumSelect = document.getElementById("albumSelect");
	var albumSelect4 = document.getElementById("albumSelect4");
	var albumSelect3 = document.getElementById("albumSelect3");
	var albumSelect2 = document.getElementById("albumSelect2");
	var albumSelect1 = document.getElementById("albumSelect1");
	var album4 = document.getElementById("album4");
	var album3 = document.getElementById("album3");
	var album2 = document.getElementById("album2");
	var album1 = document.getElementById("album1");
	var moreAlbums = document.getElementById("moreAlbums");
	var albumCover = document.getElementById("albumCover4");

	albumSelect.style.zIndex = "994";
	albumSelect4.style.display = "block";
	albumSelect4.style.background = "none";
	albumSelect4.style.border = "1px solid #2D2D2D";
	albumSelect3.style.display = "none";
	albumSelect2.style.display = "none";
	albumSelect1.style.display = "none";
	albumSelect4.classList.add("activeAlbum");
	moreAlbums.style.filter = "none";
	moreAlbums.setAttribute("onclick","albumSelect()");
	
	if (albumSelect4.style.display = "block")
		{
		album4.classList.add("play");
		album3.classList.remove("play");
		album2.classList.remove("play");
		album1.classList.remove("play");
		albumCover.classList.add("activeCover");
		}

	}

function albumSelect3() {
	
	var albumSelect = document.getElementById("albumSelect");
	var albumSelect4 = document.getElementById("albumSelect4");
	var albumSelect3 = document.getElementById("albumSelect3");
	var albumSelect2 = document.getElementById("albumSelect2");
	var albumSelect1 = document.getElementById("albumSelect1");
	var album4 = document.getElementById("album4");
	var album3 = document.getElementById("album3");
	var album2 = document.getElementById("album2");
	var album1 = document.getElementById("album1");
	var moreAlbums = document.getElementById("moreAlbums");
	var albumCover = document.getElementById("albumCover3");
	var albumEnTitle3 = document.getElementById("albumEnTitle3");

	albumSelect.style.zIndex = "994";
	albumSelect4.style.display = "none";
	albumSelect3.style.display = "block";
	albumSelect3.style.background = "none";
	albumSelect3.style.border = "1px solid #2D2D2D";
	albumSelect2.style.display = "none";
	albumSelect1.style.display = "none";
	albumSelect3.classList.add("activeAlbum");
	moreAlbums.style.filter = "none";
	moreAlbums.setAttribute("onclick","albumSelect()");
	albumEnTitle3.style = ("color: #D9974B !important");

	
	if (albumSelect3.style.display = "block")
		{
		album4.classList.remove("play");
		album3.classList.add("play");
		album2.classList.remove("play");
		album1.classList.remove("play");
		albumCover.classList.add("activeCover");
		}

	}

function albumSelect2() {
	
	var albumSelect = document.getElementById("albumSelect");
	var albumSelect4 = document.getElementById("albumSelect4");
	var albumSelect3 = document.getElementById("albumSelect3");
	var albumSelect2 = document.getElementById("albumSelect2");
	var albumSelect1 = document.getElementById("albumSelect1");
	var album4 = document.getElementById("album4");
	var album3 = document.getElementById("album3");
	var album2 = document.getElementById("album2");
	var album1 = document.getElementById("album1");
	var moreAlbums = document.getElementById("moreAlbums");
	var albumCover = document.getElementById("albumCover2");
	var albumEnTitle2 = document.getElementById("albumEnTitle2");

	albumSelect.style.zIndex = "994";
	albumSelect4.style.display = "none";
	albumSelect3.style.display = "none";
	albumSelect2.style.display = "block";
	albumSelect2.style.background = "none";
	albumSelect2.style.border = "1px solid #2D2D2D";
	albumSelect1.style.display = "none";
	albumSelect2.classList.add("activeAlbum");
	moreAlbums.style.filter = "none";
	moreAlbums.setAttribute("onclick","albumSelect()");
	albumEnTitle2.style = ("color: #D9974B !important");
	
	if (albumSelect2.style.display = "block")
		{
		album4.classList.remove("play");
		album3.classList.remove("play");
		album2.classList.add("play");
		album1.classList.remove("play");
		albumCover.classList.add("activeCover");
		}

	}

function albumSelect1() {
	
	var albumSelect = document.getElementById("albumSelect");
	var albumSelect4 = document.getElementById("albumSelect4");
	var albumSelect3 = document.getElementById("albumSelect3");
	var albumSelect2 = document.getElementById("albumSelect2");
	var albumSelect1 = document.getElementById("albumSelect1");
	var album4 = document.getElementById("album4");
	var album3 = document.getElementById("album3");
	var album2 = document.getElementById("album2");
	var album1 = document.getElementById("album1");
	var moreAlbums = document.getElementById("moreAlbums");
	var albumCover = document.getElementById("albumCover1");
	var albumEnTitle1 = document.getElementById("albumEnTitle1");

	albumSelect.style.zIndex = "994";
	albumSelect4.style.display = "none";
	albumSelect3.style.display = "none";
	albumSelect2.style.display = "none";
	albumSelect1.style.display = "block";
	albumSelect1.style.background = "none";
	albumSelect1.style.border = "1px solid #2D2D2D";
	albumSelect1.classList.add("activeAlbum");
	moreAlbums.style.filter = "none";
	moreAlbums.setAttribute("onclick","albumSelect()");
	albumEnTitle1.style = ("color: #D9974B !important");
	
	if (albumSelect1.style.display = "block")
		{
		album4.classList.remove("play");
		album3.classList.remove("play");
		album2.classList.remove("play");
		album1.classList.add("play");
		albumCover.classList.add("activeCover");
		}

	}

/* ------------------------- MOBILE VERSION ------------------------- */

if (window.innerHeight > window.innerWidth || window.innerWidth < 520){

	document.getElementById("nuts").addEventListener("mouseover", function() {
		document.getElementById("squirrel").style.display = "block";
		document.getElementById("squirrel").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/squirrel-m.png) left center no-repeat";
		document.getElementById("squirrel").style.backgroundSize = "auto";
		document.getElementById("squirrel").style.animation = "squirrel-m 6s steps(39) infinite";
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

		document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-3.svg) center no-repeat";
		document.getElementById("burger").style.backgroundSize = "cover";
		document.getElementById("sidenav").style.marginLeft = "0px";
		document.getElementById("sidenav").style.width = "100%";
		document.getElementById("open-menu").style.transform = "rotate(-90deg)";
		document.getElementById("open-menu").style.transition = "all .25s ease-in";
		document.getElementById("social-links").style.flexDirection = "row";
		document.getElementById("social-links").style.flexWrap = "wrap";

		if (actualMargin == "0px") {
			navMargin.style.marginLeft = "-100%";
			document.getElementById("burger").style.background = "url(https://raw.githubusercontent.com/InsaneChronos/webtest/main/assets/burger-1.svg) center no-repeat";
			document.getElementById("burger").style.backgroundSize = "cover";
			document.getElementById("open-menu").style.transform = "rotate(0deg)";
			document.getElementById("social-links").style.marginLeft = "0px";
			}

	}

	document.getElementById("nav-links").style.textAlign = "center";
	document.getElementById("nav-links").style.paddingTop = "35px";
	document.getElementById("social-links").style.width = "250px";
	document.getElementById("social-links").style.height = "100%";
	document.getElementById("social-links").style.position = "relative";
	document.getElementById("social-links").style.display = "flex";
	document.getElementById("social-links").style.alignItems = "baseline";
	document.getElementById("social-links").style.justifyContent = "center";
	document.getElementById("social-links").style.alignContent = "flex-end";
	document.getElementById("social-links").style.left = "calc(50% - 125px)";
	document.getElementById("social-links").style.transition = "0s";
	document.getElementById("socialContainer").style.marginBottom = "30px";
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("open-menu").style.left = "15px";
	document.getElementById("langSelect").style.right = "15px";
	document.getElementById("langContainer").style.right = "-8px";
	document.getElementById("topPage").style.height = "100px";
	document.getElementById("titleTop").style.top = "6.5%";
	document.getElementById("titleTop").style.color = "#9D9D9D";
	document.getElementById("content").style.width = "80%";
	document.getElementById("content").style.height = "calc(100% - 200px)";
	document.getElementById("content").style.top = "100px";
	document.getElementById("footerPage").style.height = "100px";
	document.getElementById("titleFooter").style.bottom = "6.5%";
	document.getElementById("titleFooter").style.fontSize = "10px";
	document.getElementById("titleFooter").style.color = "#9D9D9D";
	document.getElementById("merchContainer").style.width = "60px";
	document.getElementById("merchContainer").style.margin = "5px auto";
	document.getElementById("merchContainer").style.left = "15px";
	document.getElementById("merchContainer").style.zIndex = "998";
	document.getElementById("merch").style.width = "60px";
	document.getElementById("nutsContainer").style.width = "75px";
	document.getElementById("nutsContainer").style.height = "130px";
	document.getElementById("nutsContainer").style.bottom = "7.5px";
	document.getElementById("nutsContainer").style.zIndex = "998";
	document.getElementById("nuts").style.width = "75px";
	document.getElementById("nuts").style.height = "130px";
	document.getElementById("squirrel").style.width = "75px";
	document.getElementById("squirrel").style.height = "130px";

    var social = document.getElementsByClassName("social-link");
    var count;
    for (count = 0; count < social.length; count++) {
		social[count].style.margin = "5px";
		social[count].style.width = "50px";
		social[count].style.height = "50px";
		}

	}
