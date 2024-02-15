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

/* ------------------------- АЛЬБОМЫ (НАЧАЛО) ------------------------- */

document.getElementById("photoSlide-2018-1-prev").style.opacity = ".5";
document.getElementById("photoSlide-2018-1-prev").style.pointerEvents = "none";
document.getElementById("photoSlide-2018-2-prev").style.opacity = ".5";
document.getElementById("photoSlide-2018-2-prev").style.pointerEvents = "none";

const photosSlider2018 = document.querySelector(".photosSlider-2018");
const photosSlide2018 = document.querySelector(".photosSlide-2018");
const photosSlider2017 = document.querySelector(".photosSlider-2017");
const photosSlide2017 = document.querySelector(".photosSlide-2017");

function photos2018(positive = true) {
	const slideWidth = photosSlide2018.clientWidth;
	photosSlider2018.scrollLeft = positive ? photosSlider2018.scrollLeft + slideWidth + 10 : photosSlider2018.scrollLeft - slideWidth - 10;
	}

function photos2017(positive = true) {
	const slideWidth = photosSlide2017.clientWidth;
	photosSlider2017.scrollLeft = positive ? photosSlider2017.scrollLeft + slideWidth + 10 : photosSlider2017.scrollLeft - slideWidth - 10;
	}

const photos2018ablum1 = document.getElementById("photos-2018-1");
const photos2018ablum2 = document.getElementById("photos-2018-2");
const photo20181 = document.querySelector(".photo-2018-1");
const photo20182 = document.querySelector(".photo-2018-2");

function open2018Album1() {
	document.getElementById("photoAlbum-2018-1").classList.remove("photoAlbumsHidden");
	document.getElementById("photoAlbum-2018-1").classList.add("photoAlbumsVisible");
	}

function close2018Album1() {
	document.getElementById("photoAlbum-2018-1").classList.remove("photoAlbumsVisible");
	document.getElementById("photoAlbum-2018-1").classList.add("photoAlbumsHidden");
	}

function photo2018album1(positive = true) {
	const slideWidth = photo20181.clientWidth;
	photos2018ablum1.scrollLeft = positive ? photos2018ablum1.scrollLeft + slideWidth : photos2018ablum1.scrollLeft - slideWidth;
	}

function open2018Album2() {
	document.getElementById("photoAlbum-2018-2").classList.remove("photoAlbumsHidden");
	document.getElementById("photoAlbum-2018-2").classList.add("photoAlbumsVisible");
	}

function close2018Album2() {
	document.getElementById("photoAlbum-2018-2").classList.remove("photoAlbumsVisible");
	document.getElementById("photoAlbum-2018-2").classList.add("photoAlbumsHidden");
	}

function photo2018album2(positive = true) {
	const slideWidth = photo20182.clientWidth;
	photos2018ablum2.scrollLeft = positive ? photos2018ablum2.scrollLeft + slideWidth : photos2018ablum2.scrollLeft - slideWidth;
	}

photos2018ablum1.onscroll = function (event) {

	if (photos2018ablum1.scrollLeft + photos2018ablum1.offsetWidth == photos2018ablum1.scrollWidth) {
		document.getElementById("photoSlide-2018-1-next").style.opacity = ".5";
		document.getElementById("photoSlide-2018-1-next").style.pointerEvents = "none";
		}

	else if (photos2018ablum1.scrollLeft == 0) {
		document.getElementById("photoSlide-2018-1-prev").style.opacity = ".5";
		document.getElementById("photoSlide-2018-1-prev").style.pointerEvents = "none";
		}

	else if (photos2018ablum1.scrollLeft > 0) {
		document.getElementById("photoSlide-2018-1-prev").style.opacity = "1";
		document.getElementById("photoSlide-2018-1-prev").style.pointerEvents = "all";
		document.getElementById("photoSlide-2018-1-next").style.opacity = "1";
		document.getElementById("photoSlide-2018-1-next").style.pointerEvents = "all";
		}

	}

photos2018ablum2.onscroll = function (event) {

	if (photos2018ablum2.scrollLeft + photos2018ablum2.offsetWidth == photos2018ablum2.scrollWidth) {
		document.getElementById("photoSlide-2018-2-next").style.opacity = ".5";
		document.getElementById("photoSlide-2018-2-next").style.pointerEvents = "none";
		}

	else if (photos2018ablum2.scrollLeft == 0) {
		document.getElementById("photoSlide-2018-2-prev").style.opacity = ".5";
		document.getElementById("photoSlide-2018-2-prev").style.pointerEvents = "none";
		}

	else if (photos2018ablum2.scrollLeft > 0) {
		document.getElementById("photoSlide-2018-2-prev").style.opacity = "1";
		document.getElementById("photoSlide-2018-2-prev").style.pointerEvents = "all";
		document.getElementById("photoSlide-2018-2-next").style.opacity = "1";
		document.getElementById("photoSlide-2018-2-next").style.pointerEvents = "all";
		}

	}

/* ------------------------- АЛЬБОМЫ (КОНЕЦ) ------------------------- */

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
	document.querySelector(".photosSlider-2018").style.width = "100%";
	document.querySelector(".photosSlider-2018").style.gap = "20px";
	document.querySelector(".photosSlider-2017").style.width = "100%";
	document.querySelector(".photosSlider-2017").style.gap = "20px";
	document.getElementById("photoSlide-2018-1-prev").style.top = "calc(80% - 25px)";
	document.getElementById("photoSlide-2018-1-prev").style.left = "20px";
	document.getElementById("photoSlide-2018-1-next").style.top = "calc(80% - 25px)";
	document.getElementById("photoSlide-2018-1-next").style.right = "20px";
	document.getElementById("photoSlide-2018-2-prev").style.top = "calc(80% - 25px)";
	document.getElementById("photoSlide-2018-2-prev").style.left = "20px";
	document.getElementById("photoSlide-2018-2-next").style.top = "calc(80% - 25px)";
	document.getElementById("photoSlide-2018-2-next").style.right = "20px";
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

	$(document).ready(function () {$(".photosSlider").addClass("albumsColumn");});

    var social = document.getElementsByClassName("social-link");
    var count;
    for (count = 0; count < social.length; count++) {
		social[count].style.margin = "5px";
		social[count].style.width = "50px";
		social[count].style.height = "50px";
		}

	var arrow = document.getElementsByClassName("photosSlider-arrow");
	for (var i = 0; i < arrow.length; i++ ) {arrow[i].style.display = "none";}

	var width2018 = document.getElementsByClassName("photosSlide-2018");
	for (var i = 0; i < width2018.length; i++ ) {width2018[i].style.width = "calc(100% - 4px)";}

	var width2017 = document.getElementsByClassName("photosSlide-2017");
	for (var i = 0; i < width2017.length; i++ ) {width2017[i].style.width = "calc(100% - 4px)";}

	var year = document.getElementsByClassName("photosYear");
	for (var i = 0; i < year.length; i++ ) {year[i].style.fontSize = "20px";}

	var title = document.getElementsByClassName("photosTitle");
	for (var i = 0; i < title.length; i++ ) {title[i].style.fontSize = "18px";}

	var album = document.getElementsByClassName("photoAlbum");
	for (var i = 0; i < album.length; i++ ) {album[i].style.width = "100%";}

	var albumTop = document.getElementsByClassName("albumTop");
	for (var i = 0; i < albumTop.length; i++ ) {albumTop[i].style.width = "100%";}

	var photo = document.getElementsByClassName("photo");
	for (var i = 0; i < photo.length; i++ ) {photo[i].style.width = "100%"; photo[i].style.height = "100%"; photo[i].style.aspectRatio = "16/12";}

	var albumTitle = document.getElementsByClassName("albumTitle");
	for (var i = 0; i < albumTitle.length; i++ ) {albumTitle[i].style.width = "100%"; albumTitle[i].style.bottom = "calc(20% - 80px)";}

	}
