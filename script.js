document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form"); // Sesuaikan dengan form login Anda
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const nisnInput = document.querySelector("#nisn").value.trim(); // ID input username/NISN
            const passwordInput = document.querySelector("#password").value.trim(); // ID input password
            
            // Validasi NISN harus berupa angka dan password harus 10825076
            const isNumeric = /^\d+$/.test(nisnInput);
            
            if (!isNumeric) {
                alert("Username/NISN harus berupa angka!");
                return;
            }
            
            if (passwordInput === "10825076") {
                alert("Login Berhasil! Selamat Mengerjakan Ujian.");
                // Arahkan ke halaman soal atau Google Forms ujian
                window.location.href = "https://forms.gle/link-soal-ujian-anda"; 
            } else {
                alert("Password salah! Silakan masukkan password yang benar: 10825076");
            }
        });
    }
});
