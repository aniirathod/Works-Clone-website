function loader() {
  let t1 = gsap.timeline();

  t1.to("#yellow1", {
    top: "-100%",
    delay: 0.2,
    duration: 0.4,
    ease: "expo.out",
  });
  t1.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.3,
      duration: 0.5,
      ease: "expo.out",
    },
    "a"
  );
  t1.to(
    "#page1 h1",
    {
      delay: 0.5,
      duration: 0.5,
      color: "black",
    },
    "a"
  );
  t1.to(
    "nav svg path",
    {
      delay: 0.7,
      duration: 0.4,
      fill: "black",
    },
    "a"
  );
  t1.to(
    "nav #Rnav ul li",
    {
      delay: 0.7,
      duration: 0.4,
      color: "black",
      stroke: "black",
    },
    "a"
  );
  t1.to(
    "nav #Rnav ul li g",
    {
      delay: 0.7,
      duration: 0.4,

      stroke: "black",
    },
    "a"
  );

  t1.to("video", {
    opacity: 0,
    duration: 0.01,
    ease: "expo.out",
  });

  t1.to("#yellow2", {
    opacity: 0,
    duration: 0.1,
    ease: "expo.out",
  });
}
loader();

let imageSlider = () => {
  let dataElem = document.querySelectorAll("#data");
  let page2 = document.querySelector("#page2");
  let nav_bar = document.querySelectorAll("#Rnav li");

  dataElem.forEach((ele) => {
    ele.addEventListener("mouseenter", function () {
      let bgImg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgImg})`;

      // when mouse enter in the text the nav bar text color change to black

      for (let i = 0; i < nav_bar.length; i++) {
        nav_bar[i].style.color = "black";
      }
    });

    ele.addEventListener("mouseleave", function () {
      page2.style.backgroundImage = "none";
      for (let i = 0; i < nav_bar.length; i++) {
        nav_bar[i].style.color = "white";
      }
    });
  });
};
imageSlider();

let scrollerToTop = () => {
  let icon = document.querySelector("footer #top");
  console.log(icon);
  icon.addEventListener("click", function () {
    scroll.scrollTo(0);
  });
};
scrollerToTop();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.1,
});

//on scroll and click to menu icon the nav bar elements changes
let nav_BarChanges = () => {
  let menuIcon = document.querySelector("#Rnav li svg");
  let nav_bar = document.querySelectorAll("#Rnav li");
  let logo = document.querySelector("#Lnav path");
  let menuSvg = document.querySelector("#Rnav li svg g");

  //On Scroll nav bar changes

  scroll.on("scroll", (e) => {
    console.log(e.scroll.y);
    if (e.scroll.y > 100 && e.scroll.y < 220) {
      // when scroll the plus icon rotates
      menuIcon.style.transform = "rotate(90deg)";

      // when scroll the projects,about , studies gets small

      nav_bar[1].style.opacity = "0";
      nav_bar[2].style.opacity = "0";
      nav_bar[0].style.transform = `translateX(300px)`;
    }

    //Every thing that changes after coming back they all get normal
    else if (e.scroll.y <= 100) {
      menuIcon.style.transform = "rotate(45deg)";
      nav_bar[1].style.opacity = "1";
      nav_bar[2].style.opacity = "1";
      nav_bar[0].style.transform = `translateX(0px)`;
    }

    // Change the color of nav bar logo and text when enter in the black page i.e. page2
    for (let i = 0; i < nav_bar.length; i++) {
      if (e.scroll.y >= 820 && e.scroll.y < 1700) {
        nav_bar[i].style.color = "white";
        logo.style.fill = "white";
        menuSvg.style.stroke = "white";
      } else {
        nav_bar[i].style.color = "black";
        logo.style.fill = "black";
        menuSvg.style.stroke = "black";
      }
    }
  });

  //on click menu open or close

  menuIcon.addEventListener("click", () => {
    if (nav_bar[1].style.opacity === "0") {
      nav_bar[1].style.opacity = "1";
      nav_bar[2].style.opacity = "1";
      nav_bar[0].style.transform = `translateX(0px)`;
      menuIcon.style.transform = "rotate(45deg)";
    } else {
      nav_bar[1].style.opacity = "0";
      nav_bar[2].style.opacity = "0";
      nav_bar[0].style.transform = `translateX(300px)`;
      menuIcon.style.transform = "rotate(90deg)";
    }
  });
};
nav_BarChanges();
