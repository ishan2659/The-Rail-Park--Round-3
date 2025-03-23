window.addEventListener("DOMContentLoaded", function () {
  let ScrollYvalue = window.scrollY;
  const header = document.querySelector("header");

  window.addEventListener("load", function () {
    header.style.top = "0";
    ScrollYvalue = window.scrollY;
  });

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > ScrollYvalue) {
      header.style.top = "-123px";
    } else {
      header.style.top = "0";
    }

    ScrollYvalue = scrollTop;
  });
  const carouselcontainer = document.querySelector(".carousel-container");

  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scrollvalue", window.scrollY);
  });

  /////////////////////////////////////////////////////////////////////////////////////////
  const visitingHeader = document.querySelector(".visiting-header-container");
  const parallaxDivs = document.querySelectorAll(".parallax-wrapper1 div");
  const div2 = document.querySelector(".parallax-wrapper2");
  const maintitle = document.querySelector(".main-title-container");
  const carouseltext = document.querySelector(".carousel-text");
  const carouseltext2 = document.querySelector(".carousel-text2");

  function checkVisibility() {
    const rect = visitingHeader.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();
    const rect3 = maintitle.getBoundingClientRect();
    if (
      rect.top < window.innerHeight * 0.85 ||
      rect2.top < window.innerHeight * 0.95
    ) {
      visitingHeader.classList.add("show");

      div2.classList.add("show");
    }
    maintitle.classList.add("show");

    let delay = 0;
    let allDivsVisible = true;

    parallaxDivs.forEach((div, index) => {
      const rect = div.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        setTimeout(() => {
          div.classList.add("show");
        }, delay);
        delay += 100;
      }

      if (!div.classList.contains("show")) {
        allDivsVisible = false;
      }
    });

    if (allDivsVisible) {
      window.removeEventListener("scroll", checkVisibility);
      console.log("All divs are now visible, event listener removed.");
    }
  }
  carouseltext.classList.add("show"); /////////////animating carousel text on reloading

  window.addEventListener("scroll", checkVisibility);

  window.addEventListener("load", checkVisibility);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const video = document.getElementById("hover-video");
  const video2 = document.getElementById("hover-video2");
  const videos = document.querySelectorAll(".hover-video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.play();
      video.classList.add("show");
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.classList.remove("show");
      video.currentTime = 0;
      video.load();
    });
  });

  const arrowimg = document.getElementById("arrow-hover");
  const video1 = document.getElementById("hover-video");
  const noble = document.getElementById("text-noble-id");
  noble.addEventListener("mouseenter", function () {
    arrowimg.style.color = "rgb(4, 199, 92)";
    video1.play();
  });

  noble.addEventListener("mouseleave", function () {
    arrowimg.style.color = "black";
    video1.pause();
    video1.load();
  });

  const video21 = document.getElementById("hover-video2");

  const callow = document.getElementById("text-callowhill-id");
  const arrowimg2 = document.getElementById("arrow-hover2");
  callow.addEventListener("mouseenter", function () {
    arrowimg2.style.color = "rgb(4, 199, 92)";

    video21.play();
  });

  callow.addEventListener("mouseleave", function () {
    arrowimg2.style.color = "black";
    video21.pause();
    video21.load();
  });

  const img = document.getElementById("logo");
  const hamburgerbtns = document.querySelectorAll(".hamburger-btn");
  const hamburgerbtnimage = document.querySelector(".hamburger-btn i");
  const hamburgerbtnON = hamburgerbtns[0];
  const hamburgerbtnOFF = hamburgerbtns[1];

  img.addEventListener("mouseover", function () {
    img.src = "downloadhover.svg";
  });

  img.addEventListener("mouseout", function () {
    img.src = "download.svg";
  });
  const img1 = document.getElementById("wheelchair");
  img1.addEventListener("mouseenter", function () {
    img1.src = "wheelchairhover.svg";
  });

  img1.addEventListener("mouseleave", function () {
    img1.src = "wheelchair.svg";
  });

  const img2 = document.getElementById("staircase");
  img2.addEventListener("mouseenter", function () {
    img2.src = "staircasehover.svg";
  });

  img2.addEventListener("mouseleave", function () {
    img2.src = "staircase.svg";
  });
  hamburgerbtnON.addEventListener("mouseenter", function () {
    hamburgerbtnimage.style.color = "rgb(12, 238, 114)";
  });

  hamburgerbtnON.addEventListener("mouseleave", function () {
    hamburgerbtnimage.style.color = "black";
  });
  ///////////////////////////////////////////////////////////////////////////////(hamburger-menu)

  //////////////////////////////////////////////////////////////////////////(for calendar hover)
  const calendarTiles = document.querySelectorAll(".calendar-list-items");

  calendarTiles.forEach((tile) => {
    const calendimg = tile.querySelector("img");
    const detailBtn = tile.querySelector(".calendar-details");

    tile.addEventListener("mouseenter", () => {
      calendimg.classList.add("show");
      detailBtn.classList.add("show");
    });

    tile.addEventListener("mouseleave", () => {
      calendimg.classList.remove("show");
      detailBtn.classList.remove("show");
    });
  });
  ///////////////////////////////////////////////////////////////////////////

  function defError(id, error) {
    var errorElement = document.querySelector(`#${id} .inputerror`);

    errorElement.innerHTML = error;
  }

  function Flag(event) {
    event.preventDefault();
    var returnval = true;

    var emailElement = document.getElementById("email-input");

    var email = emailElement.value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length == 0) {
      defError("email-error-container", "*Please Fill Your email");
      returnval = false;
      return;
    } else if (email.length < 3) {
      defError("email-error-container", "*The Length of email is too short");
      returnval = false;
      return;
    } else if (email.length > 50) {
      defError("email-error-container", "*The Length of email is too long");
      returnval = false;
      return;
    } else if (!emailRegex.test(email)) {
      defError("email-error-container", "*Please enter a valid email address");
      returnval = false;
      return;
    } else {
      defError("email-error-container", "");
    }

    return returnval;
  }

  document.getElementById("email-form").addEventListener("submit", Flag);

  const images = document.querySelectorAll(".img-container");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  let currentIndex = 0;

  function changeSlide(direction) {
    let currentImage = images[currentIndex];
    let nextIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    let nextImage = images[nextIndex];

    currentImage.classList.remove("show");
    currentImage.classList.add("exit");

    if (currentIndex === 0) {
      carouseltext.classList.remove("show");
    } else {
      carouseltext2.classList.remove("show");
    }

    setTimeout(() => {
      currentImage.classList.remove("exit");

      nextImage.classList.add("enter");

      setTimeout(() => {
        nextImage.classList.remove("enter");
        nextImage.classList.add("show");
        currentIndex = nextIndex;

        if (currentIndex === 0) {
          carouseltext.classList.add("show");
        } else {
          carouseltext2.classList.add("show");
        }
      }, 600);
    }, 600);
  }

  nextBtn.addEventListener("click", () => changeSlide("next"));
  prevBtn.addEventListener("click", () => changeSlide("prev"));

  const hamburgeron = document.querySelector(".hamburgeron");
  const hamburgeroff = document.querySelector(".hamburgeroff");
  const hamburgercols = document.querySelectorAll(".hamburger-column");
  let delay2 = 0;
  function menuOnOff() {
    hamburgeron.classList.toggle("show");
    hamburgeroff.classList.toggle("show");

    let delay2 = 0;

    hamburgercols.forEach((div) => {
      setTimeout(() => {
        div.classList.toggle("show");
      }, delay2);
      delay2 += 300;
    });
  }

  hamburgerbtns.forEach((button) => {
    button.addEventListener("click", menuOnOff);
  });

  viaduct = document.querySelector(".main2-video-container");
  cut = document.querySelector(".main2-video-container2");
  function parallaxEffect() {
    rectvia = viaduct.getBoundingClientRect();
    rectcut = cut.getBoundingClientRect();
    let parallaxTransform = 0,
      parallaxTransform2 = 0;
    if (rectvia.top < window.innerHeight) {
      parallaxTransform = window.innerHeight - rectvia.top;
    }
    if (rectcut.top < window.innerHeight) {
      parallaxTransform2 = window.innerHeight - rectcut.top;
    }

    viaduct.style.setProperty("--scrollvalue2", parallaxTransform);
    cut.style.setProperty("--scrollvalue3", parallaxTransform2);
  }
  window.addEventListener("scroll", parallaxEffect);
});
