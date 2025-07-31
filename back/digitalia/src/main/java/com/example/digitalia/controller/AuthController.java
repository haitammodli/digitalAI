package com.example.digitalia.controller;

import com.example.digitalia.dto.RegisterRequest;
import com.example.digitalia.service.AuthService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RequiredArgsConstructor
@RestController

@RequestMapping("/api/auth")

public class AuthController {
private final AuthService authService;
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
            authService.register(request);
        return ResponseEntity.ok("Inscription réussie !");
    }
}
