// package com.carikerja.backend.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//                 .allowedOrigins("http://localhost:5173")
//                 .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                 .allowedHeaders("*")
//                 .allowCredentials(true)
//                 .maxAge(3600);
//     }
// }


package com.carikerja.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // CORS untuk semua endpoint (global)
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173", "http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true)
                        .maxAge(3600);

                // CORS spesifik untuk endpoint "/api/**"
              
            }
        };
    }
}
