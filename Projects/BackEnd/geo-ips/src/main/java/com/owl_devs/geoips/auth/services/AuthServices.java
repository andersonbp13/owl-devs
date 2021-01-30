package com.owl_devs.geoips.auth.services;

import com.google.common.base.Preconditions;
import com.owl_devs.geoips.auth.model.UserModel;
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

        UserModel newUserModel = convertUser(userDto);

        userRepository.save(newUserModel);
    }

    public List<UserDto> getUsers() {
        List<UserModel> userModels = userRepository.findAll();

        return convertUsersToDto(userModels);
    }

    private List<UserDto> convertUsersToDto(List<UserModel> userModels) {
        List<UserDto> usersDto = new ArrayList<UserDto>();

        userModels.forEach((userModel) -> {
            usersDto.add(UserDto.builder()
                    .personalId(userModel.getPersonalId())
                    .idType(userModel.getIdType())
                    .userName(userModel.getUserName())
                    .password(userModel.getPassword())
                    .userType(userModel.getUserType())
                    .name(userModel.getName())
                    .birthDate(userModel.getBirthDate())
                    .cellphone(userModel.getCellphone())
                    .id(userModel.getId())
                    .build());
        });

        return usersDto;
    }

    private UserModel convertUser(UserDto userDto) {
        return UserModel.builder()
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
