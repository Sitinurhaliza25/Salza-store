package com.carikerja.backend.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.carikerja.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}