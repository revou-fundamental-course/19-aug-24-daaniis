document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Tampilkan data yang diinput
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    alert('Message Submitted Successfully!');
});
