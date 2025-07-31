package com.example.digitalia.service;
import com.example.digitalia.dto.RegisterRequest;
import com.example.digitalia.enums.Role;
import com.example.digitalia.exceptions.EmailAlreadyExistsException;
import com.example.digitalia.model.Admin;
import com.example.digitalia.model.CM;
import com.example.digitalia.model.User;
import com.example.digitalia.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
   private  final UserRepository userRepository ;
   private final PasswordEncoder passwordEncoder;
   public void register(RegisterRequest request){
       if (userRepository.existsByEmail(request.getEmail())){
throw new EmailAlreadyExistsException("Email deja existant !!!");
       }
       User user ;
       String hashedPasswod = passwordEncoder.encode(request.getPassword());

       if(request.getRole().equalsIgnoreCase("ADMIN")){
           Admin admin=new Admin();
           admin.setEmail(request.getEmail());
           admin.setUsername(request.getUsername());
           admin.setPassword(hashedPasswod);
           admin.setRole(Role.ADMIN);
           user=admin;
       }

      else  if(request.getRole().equalsIgnoreCase("CM")){
           CM cm=new CM();
           cm.setEmail(request.getEmail());
           cm.setUsername(request.getUsername());
           cm.setPassword(hashedPasswod);
           cm.setRole(Role.CM);
           user= cm;
       }
       else {
           throw new IllegalArgumentException("Rôle invalide : " + request.getRole());
       }
userRepository.save(user);
   }}
