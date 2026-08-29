middlewares/

Tempat menyaring request sebelum mencapai controller. Sangat penting untuk fitur hak akses:

authMiddleware: Memeriksa apakah user sudah login/memiliki token valid.

roleMiddleware: Memastikan endpoint manajemen user hanya bisa diakses oleh Super Admin.