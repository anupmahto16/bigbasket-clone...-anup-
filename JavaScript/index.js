//Footer Section.
var aboutBtn = document.querySelector('#About > button');
if (aboutBtn) {
    aboutBtn.addEventListener('click', function () {
        document.querySelector('#collaspe').style.display = "block";
        aboutBtn.style.display = 'none';
        console.log("hello");
    });
}
