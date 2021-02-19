const navigateToProjects = () => {
  $(".nav-link__socials").css({ display: "flex" });
  $(".nav-link__projects").hide();

  $(".projects")
    .hide()
    .animate({ width: "toggle" }, () => {
      console.log("done");
      $(".projects .project-names>p").show();
    });
  $(".social").hide();
};

const navigateToSocials = () => {
  $(".projects .project-names>p").hide();
  $(".nav-link__socials").hide();
  $(".nav-link__projects").css({ display: "flex" });

  $(".social").hide().animate({ width: "toggle" });
  $(".projects").hide();
};
