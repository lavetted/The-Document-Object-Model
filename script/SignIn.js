// getElementById
const loginForm = document.getElementById("loginForm");
const title = document.getElementById("title");

// querySelector / querySelectorAll
const logoutBtn = document.querySelector("#logoutBtn");
const errorMsg = document.querySelector("#errorMsg");

// =====================
// LOGIN FORM (EVENT + DOM VALIDATION)
// =====================

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // DOM EVENT-BASED VALIDATION
  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  errorMsg.textContent = "";

  // BOM: alert
  window.alert("Login successful!");

  // BOM: localStorage
  localStorage.setItem("user", username);

  // Modify HTML content
  title.textContent = `Welcome, ${username}`;

  // Modify style
  loginForm.style.display = "none";
  logoutBtn.hidden = false;
});

// =====================
// LOGOUT
// =====================

logoutBtn.addEventListener("click", function () {
  // BOM: confirm
  const confirmLogout = window.confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    localStorage.clear();

    // BOM: reload
    location.reload();
  }
});
