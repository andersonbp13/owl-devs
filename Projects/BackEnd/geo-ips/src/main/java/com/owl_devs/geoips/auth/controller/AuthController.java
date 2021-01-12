package com.owl_devs.geoips.auth.controller;

import com.google.common.base.Preconditions;
import com.owl_devs.geoips.auth.model.User;
import com.owl_devs.geoips.auth.resources.UserDto;
import com.owl_devs.geoips.auth.services.AuthServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class AuthController {
    AuthServices authServices;

    @Autowired
    public AuthController(AuthServices authServices) {
        this.authServices = authServices;
    }

    @PostMapping("/store-user")
    public ResponseEntity<?> storeUser(@RequestBody UserDto userDto) {
        Preconditions.checkArgument(userDto != null, "userDto can not be null");

        authServices.storeUser(userDto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/get-users")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(authServices.getUsers());
    }
}

