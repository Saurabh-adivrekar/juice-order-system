package com.juiceorder.controller;

import com.juiceorder.model.Contact;
import com.juiceorder.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact saveMessage(@RequestBody Contact contact) {
        return contactService.saveMessage(contact);
    }

    @GetMapping
    public List<Contact> getAllMessages() {
        return contactService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Contact getMessageById(@PathVariable Long id) {
        return contactService.getMessageById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactService.deleteMessage(id);
    }
}
