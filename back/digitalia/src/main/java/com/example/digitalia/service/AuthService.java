package com.example.digitalia.service;

import com.example.digitalia.dto.RegisterRequest;
import com.example.digitalia.enums.Role;
import com.example.digitalia.exceptions.EmailAlreadyExistsException;
import com.example.digitalia.model.Admin;
import com.example.digitalia.model.CM;
import com.example.digitalia.model.User;
import com.example.digitalia.repository.UserRepository;
import com.example.digitalia.security.JwtUtils;
import com.example.digitalia.dto.AuthRequest;
import com.example.digitalia.dto.AuthResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public void register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email déjà existant !");
        }

        User user;
        String hashedPassword = passwordEncoder.encode(request.getPassword());

       if (Role.valueOf(request.getRole()) == Role.ADMIN)
        {
            Admin admin = new Admin();
            admin.setEmail(request.getEmail());
            admin.setUsername(request.getUsername());
            admin.setPassword(hashedPassword);
            admin.setRole(Role.ADMIN);
            admin.setActive(true);
            user = admin;

        } else if (Role.valueOf(request.getRole()) == Role.ADMIN) {
            CM cm = new CM();
            cm.setEmail(request.getEmail());
            cm.setUsername(request.getUsername());
            cm.setPassword(hashedPassword);
            cm.setRole(Role.CM);
            cm.setActive(true);
            user = cm;

        } else {
            throw new IllegalArgumentException("Rôle invalide : " + request.getRole());
        }

        userRepository.save(user);
    }

    public AuthResponse login(AuthRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        String token = jwtUtils.generateToken(request.getEmail());
        return new AuthResponse(token);
    }
}
