function toggleNavbar() {
    var sideNavbar = document.getElementById("sideNavbar");
    if (sideNavbar.style.width === "250px") {
      sideNavbar.style.width = "0";
    } else {
      sideNavbar.style.width = "250px";
    }
  }

  function closeNavbar() {
    document.getElementById("sideNavbar").style.width = "0";
  }