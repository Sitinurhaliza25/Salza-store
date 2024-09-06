package com.carikerja.backend.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.carikerja.backend.model.clothe;
// import com.carikerja.backend.repository.clotheRepository;


// @CrossOrigin (origins = "http://localhost:5173")
// @RestController
// @RequestMapping("/api/clothes")
// public class clotheController {
//     @Autowired
//     private clotheRepository ClotheRepository;

//     @GetMapping
//     public List<clothe> getAll(){
//         return ClotheRepository.findAll();
//     }

//     @PostMapping
//     public clothe create(@RequestBody clothe Clothe){
//        return ClotheRepository.save(Clothe);
//     }

//     @PutMapping()
//     public String editById(@RequestBody clothe Clothe){
//         ClotheRepository.save(Clothe);
//         return "product berhasil di perbarui";
//     }
    
//     @DeleteMapping("{id}")
//     public String deleteById(@PathVariable Long id){
//         ClotheRepository.deleteById(id);
//         return "product berhasil di hapus";
//     }
// }



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carikerja.backend.model.Product;
import com.carikerja.backend.repository.ProductRepository;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            Product updatedProduct = product.get();
            updatedProduct.setName(productDetails.getName());
            // updatedProduct.setDescription(productDetails.getDescription());
            updatedProduct.setPrice(productDetails.getPrice());
            updatedProduct.setCategory(productDetails.getCategory());
            updatedProduct.setStock(productDetails.getStock());
            updatedProduct.setImageUrl(productDetails.getImageUrl());
            return productRepository.save(updatedProduct);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return "Product deleted successfully!";
}

}
