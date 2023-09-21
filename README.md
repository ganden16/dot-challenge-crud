# Readme

### Design Pattern
Design pattern menggunakan MVC dan service pattern. Menggunakan MVC karena hal ini logic aplikasi menjadi mudah dipahami dan sangat sering digunakan. Kemudian penggunaan service pattern menjadikan interaksi query database  dilakukan secara terpisah, sehingga beban controller tidak berat dan hanya berfokus pada logic bisnis aplikasi.

### Persiapan 
1. Clone repository
2. Install semua dependensi : 
   ```sh
   npm install
   ```
3. Setting konfigurasi database pada file .env
4. Jalankan script untuk melakukan migrasi dan seeding :
```sh
   npm run db:create
   ```
```sh
   npm run db:migrate
   ```
```sh
   npm run db:seed
   ```
5. Lihat semua script yang bisa dijalankan pada file package.json

### Dokumentasi
Dokumentasi api : [view documentation](https://documenter.getpostman.com/view/19885257/2s9YCASAfz#6b5014ce-336f-41d2-9b38-07733f4ecb4a)

