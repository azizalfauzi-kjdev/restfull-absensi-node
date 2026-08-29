// config/db.js (Tipe Connection Pool)
const mysql = require("mysql2");

// Membuka kumpulan koneksi (Pool)
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "api-absensi-pegawai-lite",
  waitForConnections: true, // Menunggu jika semua koneksi pool sedang sibuk
  connectionLimit: 10, // Maksimal 10 koneksi simultan terbuka ke MySQL
  queueLimit: 0, // Antrean tanpa batas jika pool penuh
});

// Mengubah pool agar mendukung fitur Promise (Async/Await)
const db = pool.promise();

// Menguji apakah pool berhasil terhubung ke MySQL XAMPP
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Koneksi Pool MySQL XAMPP gagal:", err.message);
  } else {
    console.log("Terhubung ke MySQL XAMPP menggunakan Connection Pool!");
    connection.release(); // Mengembalikan koneksi penguji ke dalam pool
  }
});

module.exports = db;
