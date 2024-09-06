// package com.carikerja.backend.model;


// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class clothe {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY )
//     private Long Id;
//     private String name;
//     private Integer price;
// }


package com.carikerja.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    // private String description;
    private double price;
    private String category;
    private String stock;
    private String imageUrl;

}
