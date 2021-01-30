package com.owl_devs.geoips.auth.repositories;

import com.owl_devs.geoips.auth.model.UserModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<UserModel, Integer> {
    List<UserModel> findAll();
    UserModel findByUserName(String username);
}
