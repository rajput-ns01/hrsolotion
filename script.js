
document.getElementById('mobile-menu').addEventListener('click', function () {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    filterJobs();
});

document.getElementById('search-form').addEventListener('reset', function(event) {
    resetFilter();
});

function filterJobs() {
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const jobLocation = card.getAttribute('data-location').toLowerCase();

        if (title.includes(keyword) && jobLocation.includes(location)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetFilter() {
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        card.style.display = 'block';
    });
}
