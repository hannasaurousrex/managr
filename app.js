// Add scroll trigger GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Dialog Box
// Get shoelace dialog
const dialog = document.querySelector(".dialog-overview");
const openButtons = document.querySelectorAll(".open-dialog");
const closeDialog = document.querySelector(".dialog-close");

// Hides dialog
closeDialog.addEventListener("click", () => {
  dialog.hide();
});

// Gets buttons to open dialog
openButtons.forEach((btn) => {
  btn.addEventListener("click", () => dialog.show());
});

// Dialog Box Form
const form = document.querySelector(".input-validation-type");
form.addEventListener("sl-submit", () => alert("Request has been sent"));

// Video dialog
// Get video dialog
const videoDialog = document.querySelector(".testimonial-video");
const playButtons = document.querySelectorAll(".play-btn");

// Get button to open video dialog
playButtons.forEach((btn) => {
  btn.addEventListener("click", () => videoDialog.show());
});

// Teams and Individuals section
// Gets related elements
const teamsBtn = document.querySelector("#teams-btn");
const teamsContent = document.querySelector("#teams-content");
const individualsBtn = document.querySelector("#individuals-btn");
const individualsContent = document.querySelector("#individuals-content");

// Toggles classes on teams and individuals section elements
function toggleContent() {
  teamsBtn.classList.toggle("unselected");
  teamsContent.classList.toggle("unselected");
  individualsBtn.classList.toggle("unselected");
  individualsContent.classList.toggle("unselected");
}

// Adding toggle function to toggle buttons
teamsBtn.addEventListener("click", toggleContent);
individualsBtn.addEventListener("click", toggleContent);

// Scroll in animations
// Scroll in animation overview image
gsap.from(".overview-img", {
  scrollTrigger: {
    trigger: ".overview-img",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 1,
  x: -100,
  opacity: 0,
});

// Scroll in animation overview image
gsap.from(".overview-img-second", {
  scrollTrigger: {
    trigger: ".overview-img-second",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 1,
  x: 100,
  opacity: 0,
});

// Scroll in animation portability image
gsap.from(".platforms-illustration", {
  scrollTrigger: {
    trigger: ".platforms-illustration",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 1,
  x: -100,
  opacity: 0,
});

// Slick Slider - Image carousel
$(".responsive").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
