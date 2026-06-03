// popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector("#popup");

  if (popup) {
    const popupCloseBtn = popup.querySelector("#popup-Btn");
    const agree = document.querySelector("#agree");

    popup.style.display = document.cookie.includes("popup=안볼래")
      ? "none"
      : "block";

    popupCloseBtn.addEventListener("click", () => {
      popup.style.display = "none";

      if (agree.checked) {
        createCookie("popup", "안볼래", 1);
      } else {
        createCookie("popup", "안볼래", -1);
      }
    });
  }

  function createCookie(name, value, days) {
    let today = new Date();
    today.setDate(today.getDate() + days);

    document.cookie = `${name}=${value}; expires=${today.toUTCString()}`;
  }
});
// Slide     
const controlSlide = new Swiper(".online-content", {
  loop: true,

  navigation: {
    nextEl: ".slides_nav .next",
    prevEl: ".slides_nav .prev",
  },

   pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 20,
});

