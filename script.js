let textarea = document.getElementById("textarea");
let currentCount = document.getElementById("current");
let remainCount = document.getElementById("remain");
let counter = document.getElementById("counter");
let counter2=document.getElementById("counter-remaining");

textarea.addEventListener("input", () => {
  let currentLength = textarea.value.length;
  currentCount.textContent = currentLength;

  let remainlenth = textarea.value.length;
  remainCount.textContent = 50 - remainlenth;

  if (currentLength == 50) {
    counter.style.color = "red";
    counter2.style.color = "red";
    remainCount.style.color = "red";
    currentCount.style.color = "red";
  } else {
    counter.style.color = "white";
    counter2.style.color = "white";
    remainCount.style.color = "white";
    currentCount.style.color = "white";
  }
});
