package com.example.digitalia.controller;

import com.example.digitalia.dto.AuthRequest;
import com.example.digitalia.dto.AuthResponse;
import com.example.digitalia.dto.RegisterRequest;
import com.example.digitalia.model.User;
import com.example.digitalia.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("Inscription réussie !");
    }
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Accès sécurisé réussi !");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
    @GetMapping("/admins")
    public ResponseEntity<List<User>> listAdmins() {
        return ResponseEntity.ok(authService.listAdmins());
    }

    @GetMapping("/cms")
    public ResponseEntity<List<User>> listCMs() {
        return ResponseEntity.ok(authService.listCMs());
    }
}
