document.addEventListener("DOMContentLoaded", function() {
    var scrollDown = document.getElementById("scroll_down");
    var arrowIcon = document.getElementById("arrow_down");
    var tableNav = document.getElementById("table_navbar");
    scrollDown.addEventListener("click", function() {
        // Toggle class 'fa-chevron-down' và 'fa-chevron-up'
        arrowIcon.classList.toggle("fa-chevron-down");
        arrowIcon.classList.toggle("fa-chevron-up");
        if (tableNav.style.display === "block") {
            tableNav.style.display = "none";
        } else {
            tableNav.style.display = "block";
        }
    });
});