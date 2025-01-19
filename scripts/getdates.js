document.addEventListener('DOMContentLoaded', function() {
    // Dynamically output the current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Dynamically output the last modified date
    document.getElementById('date').textContent = document.lastModified;
});
