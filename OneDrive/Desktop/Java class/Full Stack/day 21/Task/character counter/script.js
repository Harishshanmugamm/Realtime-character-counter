let textarea = document.getElementById("textarea");
let currentCount = document.getElementById("current");
let remainCount = document.getElementById("remain");
let counter = document.getElementById("counter");

textarea.addEventListener("input", () => {
  let currentLength = textarea.value.length;
  currentCount.textContent = currentLength;

  let remainlenth = textarea.value.length;
  remainCount.textContent = 50 - remainlenth;

  if (currentLength == 50) {
    counter.style.color = "red";
  } else {
    counter.style.color = "#666";
  }
});
