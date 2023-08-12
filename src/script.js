const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("hidden");
})

document.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 0) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

function copyFunction() {
    const copyText = document.getElementById("verdiscord").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        title: 'Copied to clipboard!',
        showConfirmButton: false,
        showCloseButton: true,
    });
    textArea.remove();
}
document.getElementById('discButton').addEventListener('click', copyFunction);