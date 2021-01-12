package com.owl_devs.geoips.config;

import com.owl_devs.geoips.auth.model.User;
import com.owl_devs.geoips.auth.repositories.UserRepository;
import com.owl_devs.geoips.auth.resources.enums.IdType;
import com.owl_devs.geoips.auth.resources.enums.UserType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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
        userRepository.save(User.builder()
                .personalId(12315)
                .idType(IdType.CEDULA)
                .userName("adasd")
                .password("123")
                .userType(UserType.ADMIN)
                .name("asdasdasd")
                .birthDate(Instant.now())
                .cellphone(1356511L)
                .build());

        System.out.println("repositorio creado//////////////////////////////////////////////////");
    }
}