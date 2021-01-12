package com.owl_devs.geoips.auth.repositories;

import com.owl_devs.geoips.auth.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {
    List<User> findAll();
}
