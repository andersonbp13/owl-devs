package com.owl_devs.geoips.auth.services;

import com.owl_devs.geoips.auth.model.UserModel;
import com.owl_devs.geoips.auth.repositories.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = userRepository.findByUserName(username);
        if (userModel == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(userModel.getUserName(), userModel.getPassword(), emptyList());
    }
}
