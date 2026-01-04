// =====================
const reviewInput = document.getElementById("reviewInput");
const addReviewBtn = document.getElementById("addReviewBtn");
const reviewsContainer = document.getElementById("reviews");
const template = document.getElementById("reviewTemplate");

// =====================
// ADD REVIEW EVENT
// =====================
addReviewBtn.addEventListener("click", function () {
  const reviewTextValue = reviewInput.value.trim();

  if (reviewTextValue === "") {
    // BOM method
    window.alert("Please write a review first.");
    return;
  }

  // cloneNode (template)
  const clone = template.content.cloneNode(true);

  // parent-child navigation
  const reviewCard = clone.firstElementChild;
  const reviewText = reviewCard.querySelector(".review__text");
  const likeBtn = reviewCard.querySelector(".likeBtn");

  // Modify text content
  reviewText.textContent = reviewTextValue;

  // Modify attribute
  likeBtn.setAttribute("data-liked", "false");

  // EVENT LISTENER #2
  likeBtn.addEventListener("click", function () {
    const parent = this.parentNode;

    parent.classList.toggle("liked");

    // Modify text + attribute
    const liked = this.getAttribute("data-liked") === "true";
    this.setAttribute("data-liked", String(!liked));
    this.textContent = liked ? "Like" : "Liked!";
  });

  // appendChild
  reviewsContainer.appendChild(reviewCard);

  reviewInput.value = "";

  // BOM method
  setTimeout(() => {
    reviewCard.style.borderColor = "#000";
  }, 300);
});
