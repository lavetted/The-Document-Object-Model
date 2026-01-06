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

  // =====================
  // createElement REQUIREMENT ✅
  // =====================
  const timeStamp = document.createElement("small");

  // classList propertics
  timeStamp.classList.add("timestamp");

  const createdTime = Date.now();

  function updateRelativeTime() {
    const secondsPassed = Math.floor((Date.now() - createdTime) / 1000);

    if (secondsPassed < 60) {
      timeStamp.textContent = "Posted just now";
    } else if (secondsPassed < 120) {
      timeStamp.textContent = "Posted 1 minute ago";
    } else {
      const minutes = Math.floor(secondsPassed / 60);
      timeStamp.textContent = `Posted ${minutes} minutes ago`;
    }
  }

  updateRelativeTime();
  setInterval(updateRelativeTime, 60000);

  reviewCard.appendChild(timeStamp);

  // Modify attribute
  likeBtn.setAttribute("data-liked", "false");

  // EVENT LISTENER #2
  likeBtn.addEventListener("click", function () {
    const parent = this.parentNode;

    parent.classList.toggle("liked");

    const liked = this.getAttribute("data-liked") === "true";
    this.setAttribute("data-liked", String(!liked));
    this.textContent = liked ? "Like" : "Liked!";
  });

  // appendChild (review card)
  reviewsContainer.appendChild(reviewCard);

  reviewInput.value = "";

  // BOM method
  setTimeout(() => {
    reviewCard.style.borderColor = "#000";
  }, 300);
});
