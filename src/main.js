const scrolledAppbar = document.getElementById("scrolled-appbar");
let lastScrollPosition = 0;

window.onscroll = (event) => {
  if (window.scrollY > 200) {
    const diff = window.scrollY - lastScrollPosition;
    if (diff < 0) {
      if (scrolledAppbar.classList.contains("-translate-y-20")) {
        scrolledAppbar.classList.remove("-translate-y-20");
      }
      scrolledAppbar.classList.add("translate-0");
    } else {
      scrolledAppbar.classList.add("-translate-y-20");
      scrolledAppbar.classList.remove("translate-0");
    }
  }
  lastScrollPosition = window.scrollY;
}

window.openMobileNavbar = () => {
  const mobileNavbar = document.getElementById("mobile-navbar");
  const overlay = document.getElementById("overlay");

  mobileNavbar.classList.remove("-translate-y-60");
  mobileNavbar.classList.add("translate-0");

  overlay.classList.remove("pointer-events-none");
  overlay.classList.add("pointer-events-auto");

  overlay.addEventListener("click", () => {
    mobileNavbar.classList.remove("translate-0");
    mobileNavbar.classList.add("-translate-y-60");

    overlay.classList.remove("pointer-events-auto");
    overlay.classList.add("pointer-events-none");
  })
}

window.openContactModal = () => {
  const modal = document.getElementById("contacts-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  modalOverlay.classList.remove("pointer-events-none");
  modalOverlay.classList.add("pointer-events-auto");
  modalOverlay.classList.remove("opacity-0");
  modalOverlay.classList.add("opacity-100");
  modalOverlay.addEventListener("click", window.closeContactModal);

  requestAnimationFrame(() => {
    modal.classList.remove('scale-95', 'opacity-0');
    modal.classList.add('scale-100', 'opacity-100');
  });
}

window.closeContactModal = () => {
  const modal = document.getElementById("contacts-modal");
  const modalOverlay = document.getElementById("modal-overlay");

  modalOverlay.classList.remove("pointer-events-auto");
  modalOverlay.classList.add("pointer-events-none");
  modalOverlay.classList.remove("opacity-100")
  modalOverlay.classList.add("opacity-0");
  modalOverlay.removeEventListener("click", window.closeContactModal);

  modal.classList.remove('scale-100', 'opacity-100');
  modal.classList.add('scale-95', 'opacity-0');
}