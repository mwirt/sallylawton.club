WebFont.load({
    google: {
      families: ['Noto Sans', 'Droid Serif']
    }
  });

function navFunction() {
    $("#nav-icon").toggleClass("fa-bars fa-times");
    $("#mySidenav").toggleClass("menu-visible");
};