<?php
$host = "172.17.0.2";       // atau IP seperti "127.0.0.1"
$username = "root";        // ganti sesuai user database kamu
$password = "root";            // ganti sesuai password user database
$database = "elearning_cpns"; // ganti dengan nama database kamu

// Membuat koneksi
$koneksi = new mysqli($host, $username, $password, $database);

// Cek koneksi
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}
