package com.juiceorder.service;

import com.juiceorder.service.ContactService;
import com.juiceorder.model.Contact;
import com.juiceorder.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveMessage(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllMessages() {
        return contactRepository.findAll();
    }

    @Override
    public Contact getMessageById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteMessage(Long id) {
        contactRepository.deleteById(id);
    }
}
