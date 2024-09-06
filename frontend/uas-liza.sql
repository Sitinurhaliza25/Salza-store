-- -- Create the database
-- CREATE DATABASE uas_liza;

-- -- Use the database
-- USE uas_liza;

-- -- Create the table
-- CREATE TABLE barang (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nama_barang VARCHAR(255) NOT NULL,
--     harga FLOAT NOT NULL,
--     kode VARCHAR(50) NOT NULL UNIQUE,
--     stok INT NOT NULL,
--     image VARCHAR(255) DEFAULT NULL
-- );

-- -- Sample data insertion
-- INSERT INTO barang (nama_barang, harga, kode, stok, image)
-- VALUES 
-- ('Baju Anak', 100000, 'BJU001', 50, 'images/baju_anak.jpg'),
-- ('Celana Jeans', 150000, 'CLJ002', 30, 'images/celana_jeans.jpg');




-- CREATE TABLE IF NOT EXISTS barang (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nama_barang VARCHAR(255) NOT NULL,
--     harga DECIMAL(10, 2) NOT NULL,
--     kode VARCHAR(100) NOT NULL,
--     stok INT NOT NULL,
--     image VARCHAR(255)
-- );