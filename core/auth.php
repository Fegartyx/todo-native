<?php
// Mulai sesi
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Sertakan file koneksi database
require 'connection.php';

// Fungsi untuk login pengguna
function login($email, $password)
{
    global $koneksi;

    // Cegah SQL Injection
    $email = mysqli_real_escape_string($koneksi, $email);
    $password = mysqli_real_escape_string($koneksi, $password);

    // Query untuk memeriksa email
    $query = "SELECT * FROM user WHERE email = '$email'";
    $result = mysqli_query($koneksi, $query);

    // Periksa apakah email ditemukan
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        // Verifikasi password
        if (password_verify($password, $user['password'])) {
            // Simpan data pengguna ke sesi
            $_SESSION['id_user'] = $user['id'];
            $_SESSION['nama'] = $user['nama'];

            return true; // Login berhasil
        } else {
            return false; // Password salah
        }
    } else {
        return false; // Email tidak ditemukan
    }
}
