function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("close-menu").style.transform = "rotate(90deg)";
  document.getElementById("open-menu").style.display = "none";
  document.getElementById("close-menu").style.display = "flex";
  document.getElementById("social").style.marginLeft = "220px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("open-menu").style.transform = "rotate(0deg)";
	document.getElementById("close-menu").style.display = "none";
	document.getElementById("open-menu").style.display = "flex";
	document.getElementById("social").style.marginLeft = "0px";
	}
