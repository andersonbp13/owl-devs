package com.owl_devs.geoips.config;

import com.owl_devs.geoips.auth.model.UserModel;
import com.owl_devs.geoips.auth.repositories.UserRepository;
import com.owl_devs.geoips.auth.resources.enums.IdType;
import com.owl_devs.geoips.auth.resources.enums.UserType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.Instant;

@Configuration
public class StartUpConfig {

    @Bean
    public CommandLineRunner demo(UserRepository userRepository) {
        return (args) -> {
            CreateUsers(userRepository);
        };
    }

    private void CreateUsers(UserRepository userRepository) {
        userRepository.save(UserModel.builder()
                .personalId(12315)
                .idType(IdType.CEDULA)
                .userName("a")
                .password("$2a$10$nuUZ8GlbEmZLg8W/9yGrUOzaOJiEx7aXHwn4bl3bzXCAwf03rZLm.")
                .userType(UserType.ADMIN)
                .name("asdasdasd")
                .birthDate(Instant.now())
                .cellphone(1356511L)
                .build());

        System.out.println("repositorio creado//////////////////////////////////////////////////");
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}