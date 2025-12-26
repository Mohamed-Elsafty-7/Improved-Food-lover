const box_container = document.querySelector(".box_container");
const box_item = document.querySelector(".box_item");
const gallery = document.querySelectorAll(".gallery-pics img");
const next_1 = document.getElementById("next");
const prev_1 = document.getElementById("prev");
const close = document.getElementById("close");

var images = [];
for (let i = 0; i < gallery.length; i++) {
  images.push(gallery[i]);
};

function showImage(index) {
  box_item.style.backgroundImage = "url(" + images[index].src + ")";
};

var current_index = 0;

for (let j = 0; j < images.length; j++) {
  images[j].addEventListener("click", function () {
    box_container.style.display = "flex";
    current_index = j;
    showImage(current_index);
  });
};

next_1.addEventListener("click", function () {
  current_index++;
  if (current_index === images.length) {
    current_index = 0;
  }
  showImage(current_index);
});

prev_1.addEventListener("click", function () {
  current_index--;
  if (current_index < 0) {
    current_index = images.length - 1;
  }
  showImage(current_index);
});

close.addEventListener("click", function () {
  box_container.style.display = "none";
});

box_container.addEventListener("click", function (event) {
  if (event.target == box_container) {
    box_container.style.display = "none";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    box_container.style.display = "none";
  }
});



const offers = document.querySelector(".offer-items");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let cur_index = 0;

function slider(to) {
  var total_items = offers.children.length;
  cur_index = (cur_index + to + total_items) % total_items;
  offers.style.transform = `translateX(-${cur_index * 100}%)`;
}

next.onclick = () => slider(1);
prev.onclick = () => slider(-1);


const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  var invalid_name = document.getElementById("invalid_name");
  var invalid_email = document.getElementById("invalid_email");
  var invalid_subject = document.getElementById("invalid_subject");
  var invalid_message = document.getElementById("invalid_message");

  invalid_name.textContent = "";
  invalid_email.textContent = "";
  invalid_subject.textContent = "";
  invalid_message.textContent = "";

  var valid = true;

  if (name === "") {
    invalid_name.textContent = "Please enter your name.";
    valid = false;
  } else if (name.length < 3 || name.length > 15) {
    invalid_name.textContent = "Name must be 3–15 characters.";
    valid = false;
  }

  if (email === "") {
    invalid_email.textContent = "Please enter your email.";
    valid = false;
  }

  if (subject === "") {
    invalid_subject.textContent = "Please enter a subject.";
    valid = false;
  } else if (subject.length < 3) {
    invalid_subject.textContent = "Subject must be at least 3 characters.";
    valid = false;
  }

  if (message === "") {
    invalid_message.textContent = "Please enter a message.";
    valid = false;
  } else if (message.length < 5) {
    invalid_message.textContent = "Message must be at least 5 characters.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});
