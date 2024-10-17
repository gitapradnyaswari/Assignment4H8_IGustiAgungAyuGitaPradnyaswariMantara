document.addEventListener("DOMContentLoaded", function() {
    loadProfileData();

    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        const availability = document.getElementById('availability').value;
        const age = document.getElementById('age').value;
        const location = document.getElementById('location').value;
        const yoe = document.getElementById('yoe').value;
        const email = document.getElementById('email').value;

        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        localStorage.setItem('availability', availability);
        localStorage.setItem('age', age);
        localStorage.setItem('location', location);
        localStorage.setItem('yoe', yoe);
        localStorage.setItem('email', email);

        loadProfileData();

        document.querySelector('.form-section').style.display = 'none';
    });

    document.getElementById('edit-btn').addEventListener('click', function() {
        document.querySelector('.form-section').style.display = 'block';
        fillFormData();
    });
});

function loadProfileData() {
    document.getElementById('profile-name').innerText = localStorage.getItem('name') || 'Nama Anda';
    document.getElementById('profile-role').innerText = localStorage.getItem('role') || 'Front End Designer';
    document.getElementById('profile-availability').innerText = localStorage.getItem('availability') || 'Full Time';
    document.getElementById('profile-age').innerText = localStorage.getItem('age') || '19';
    document.getElementById('profile-location').innerText = localStorage.getItem('location') || 'Jakarta';
    document.getElementById('profile-yoe').innerText = localStorage.getItem('yoe') || '2';
    document.getElementById('profile-email').innerText = localStorage.getItem('email') || 'email@gmail.com';
}

function fillFormData() {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('role').value = localStorage.getItem('role') || '';
    document.getElementById('availability').value = localStorage.getItem('availability') || '';
    document.getElementById('age').value = localStorage.getItem('age') || '';
    document.getElementById('location').value = localStorage.getItem('location') || '';
    document.getElementById('yoe').value = localStorage.getItem('yoe') || '';
    ElementById('email').value = localStorage.getItem('email') || '';
}