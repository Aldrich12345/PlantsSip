document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const flowers = document.querySelectorAll(".flower");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filter = button.getAttribute("data-filter");
            flowers.forEach(flower => {
                flower.style.display = (filter === "all" || flower.getAttribute("data-care") === filter) ? "block" : "none";
            });
        });
    });
});