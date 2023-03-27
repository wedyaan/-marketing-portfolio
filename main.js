const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
filterGallery("logos");
filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter") ?? "logos";
    filterGallery(filterValue);
  }
});
function filterGallery(filterValue) {
  galleryItems.forEach((item) => {
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
}

var video = document.querySelectorAll("video");

video.forEach((play) =>
  play.addEventListener("click", () => {
    play.classList.toggle("active");

    if (play.paused) {
      play.play();
    } else {
      play.pause();
      play.currentTime = 0;
    }
  })
);
///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
