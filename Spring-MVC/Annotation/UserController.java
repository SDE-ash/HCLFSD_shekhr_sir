package com.mphasis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.mphasis.model.User;

@Controller
@RequestMapping("/user")
public class UserController {

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public String getUser(@PathVariable String id, Model model) {
       
        User user = new User();
        user.setId(id);
        user.setName("Vijay Kumar");
        user.setEmail("vijay@gmail.com");

        model.addAttribute("user", user);
        return "userProfile";
    }

    @RequestMapping(value = "/form", method = RequestMethod.GET)
    public String userForm(Model model) {
        model.addAttribute("user", new User());
        return "userForm";
    }

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    public String submitForm(@ModelAttribute("user") User user, Model model) {
        
        model.addAttribute("message", "User successfully saved!");
        return "userProfile2";
    }
}
