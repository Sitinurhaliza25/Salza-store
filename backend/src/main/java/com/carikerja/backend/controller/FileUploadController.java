package com.carikerja.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        // Implement file storage and generate URL
        String imageUrl = "URL_TO_THE_UPLOADED_IMAGE"; // Implement logic to get the URL
        Map<String, String> response = new HashMap<>();
        response.put("url", imageUrl);
        return ResponseEntity.ok(response);
    }
}
