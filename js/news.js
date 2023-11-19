/* ------------------------- DESKTOP VERSION ------------------------- */

var navMargin = document.getElementById("sidenav");
var actualMargin = getComputedStyle(navMargin).marginLeft;

$(document).ready(function(){$(".post").slice(0, 4).show();
	$("#more").on("click", function(e){e.preventDefault();
	$(".post:hidden").slice(0, 4).slideDown();
	if($(".post:hidden").length == 0) {$("#more").text("БОЛЬШЕ НОВОСТЕЙ НЕТ").addClass("end");}});})

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

    var posts = document.getElementsByClassName("post");
    var count;
    for (count = 0; count < posts.length; count++) {
		posts[count].style.width = "100%";
		posts[count].style.height = "250px";
		posts[count].style.lineHeight = "250px";
		}

	}