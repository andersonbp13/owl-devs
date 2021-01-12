package com.owl_devs.geoips.auth.services;

import com.google.common.base.Preconditions;
import com.owl_devs.geoips.auth.model.User;
import com.owl_devs.geoips.auth.repositories.UserRepository;
import com.owl_devs.geoips.auth.resources.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthServices {
    UserRepository userRepository;

    @Autowired
    public AuthServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void storeUser(UserDto userDto) {
        Preconditions.checkArgument(userDto.getPersonalId() != null, "personalID can not be null");
        Preconditions.checkArgument(userDto.getIdType() != null, "idType can not be null");
        Preconditions.checkArgument(userDto.getUserName() != null, "userName can not be null");
        Preconditions.checkArgument(userDto.getPassword() != null, "password can not be null");
        Preconditions.checkArgument(userDto.getUserType() != null, "userType can not be null");
        Preconditions.checkArgument(userDto.getName() != null, "name can not be null");
       // Preconditions.checkArgument(userDto.getBirthDate() != null, "birthDate can not be null");
        Preconditions.checkArgument(userDto.getCellphone() != null, "cellphone can not be null");

        User newUser = convertUser(userDto);

        userRepository.save(newUser);
    }

    public List<UserDto> getUsers() {
        List<User> users = userRepository.findAll();

        return convertUsersToDto(users);
    }

    private List<UserDto> convertUsersToDto(List<User> users) {
        List<UserDto> usersDto = new ArrayList<UserDto>();

        users.forEach((user) -> {
            usersDto.add(UserDto.builder()
                    .personalId(user.getPersonalId())
                    .idType(user.getIdType())
                    .userName(user.getUserName())
                    .password(user.getPassword())
                    .userType(user.getUserType())
                    .name(user.getName())
                    .birthDate(user.getBirthDate())
                    .cellphone(user.getCellphone())
                    .id(user.getId())
                    .build());
        });

        return usersDto;
    }

    private User convertUser(UserDto userDto) {
        return User.builder()
                .personalId(userDto.getPersonalId())
                .idType(userDto.getIdType())
                .userName(userDto.getUserName())
                .password(userDto.getPassword())
                .userType(userDto.getUserType())
                .name(userDto.getName())
                .birthDate(userDto.getBirthDate())
                .cellphone(userDto.getCellphone())
                .build();
    }
}
