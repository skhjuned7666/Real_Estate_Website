// JavaScript for Real Estate Landing Page
// Add your JavaScript functionality here

// Example: Heart icon toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  // Toggle heart icon on click
  const heartIcons = document.querySelectorAll(".card-heart");
  heartIcons.forEach((heart) => {
    heart.addEventListener("click", function (e) {
      e.stopPropagation();
      const icon = this.querySelector("i");
      if (icon.classList.contains("far")) {
        icon.classList.remove("far");
        icon.classList.add("fas");
        icon.style.color = "red";
      } else {
        icon.classList.remove("fas");
        icon.classList.add("far");
        icon.style.color = "";
      }
    });
  });

  // Search button functionality (simple log)
  const searchButton = document.querySelector(".btn-search");
  if (searchButton) {
    searchButton.addEventListener("click", function () {
      const locationInput = document.querySelector(".search-input");
      const location = locationInput ? locationInput.value : "";
      
      console.log("Search:", {
        location,
      });
      // Add your search logic here
    });
  }

  // Auth modal logic
  const authBackdrop = document.getElementById("authBackdrop");
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const switchToRegister = document.getElementById("switchToRegister");
  const switchToLogin = document.getElementById("switchToLogin");
  const closeButtons = document.querySelectorAll("[data-auth-close]");

  function openModal(type) {
    if (!authBackdrop || !loginModal || !registerModal) return;

    authBackdrop.classList.add("show");
    if (type === "login") {
      loginModal.style.display = "block";
      registerModal.style.display = "none";
    } else {
      loginModal.style.display = "none";
      registerModal.style.display = "block";
    }
  }

  function closeModal() {
    if (!authBackdrop || !loginModal || !registerModal) return;
    authBackdrop.classList.remove("show");
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal("login");
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal("register");
    });
  }

  if (switchToRegister) {
    switchToRegister.addEventListener("click", function (e) {
      e.preventDefault();
      openModal("register");
    });
  }

  if (switchToLogin) {
    switchToLogin.addEventListener("click", function (e) {
      e.preventDefault();
      openModal("login");
    });
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      closeModal();
    });
  });

  if (authBackdrop) {
    authBackdrop.addEventListener("click", function (e) {
      if (e.target === authBackdrop) {
        closeModal();
      }
    });
  }

  // Property quick view modal
  const propertyBackdrop = document.getElementById("propertyBackdrop");
  const propertyClose = document.getElementById("propertyClose");
  const viewButtons = document.querySelectorAll(".view-btn");

  function openPropertyModal() {
    if (!propertyBackdrop) return;
    propertyBackdrop.classList.add("show");
  }

  function closePropertyModal() {
    if (!propertyBackdrop) return;
    propertyBackdrop.classList.remove("show");
  }

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openPropertyModal();
    });
  });

  if (propertyClose) {
    propertyClose.addEventListener("click", function () {
      closePropertyModal();
    });
  }

  if (propertyBackdrop) {
    propertyBackdrop.addEventListener("click", function (e) {
      if (e.target === propertyBackdrop) {
        closePropertyModal();
      }
    });
  }

  // Services page tabs
  const serviceTabs = document.querySelectorAll(".services-tab");
  const servicePanels = document.querySelectorAll(".services-tab-panel");

  if (serviceTabs.length && servicePanels.length) {
    serviceTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const target = this.dataset.tab;

        serviceTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        servicePanels.forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.tab === target);
        });
      });
    });
  }

  // Projects page tabs
  const projectTabs = document.querySelectorAll(".projects-tab");
  const projectPanels = document.querySelectorAll(".projects-panel");

  if (projectTabs.length && projectPanels.length) {
    projectTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const target = this.dataset.tab;

        projectTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        projectPanels.forEach((panel) => {
          panel.classList.toggle("active", panel.dataset.tab === target);
        });
      });
    });
  }
});

