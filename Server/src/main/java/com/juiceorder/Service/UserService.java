package com.juiceorder.service;

import com.juiceorder.model.User;

public interface UserService {
    User registerUser(User user);
    User loginUser(String email, String password);
}
