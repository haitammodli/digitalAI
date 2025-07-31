package com.example.digitalia.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
       return http
               .csrf(customizer -> customizer.disable())
               .authorizeHttpRequests(request -> request
                       .requestMatchers("/api/auth/register").permitAll() // ➕ Autoriser l'inscription sans login
                       .anyRequest().authenticated()
               )

               .httpBasic(Customizer.withDefaults())
               .sessionManagement(session ->
                   session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)).build();


       //http.formLogin(Customizer.withDefaults());



    }
//    @Bean
//    public UserDetailsService userDetailsService() {
//        return new InMemoryUserDetailsManager();
//}


        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
    }


