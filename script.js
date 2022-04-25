const btn = document.getElementById("share_btn");
const field = document.getElementById("share_field");
const profileBox = document.getElementById("profile_box");

btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    profileBox.classList.toggle("active");
    field.classList.toggle("active");
})