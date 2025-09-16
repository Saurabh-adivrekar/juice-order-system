package com.juiceorder.service;

import com.juiceorder.model.Contact;
import java.util.List;

public interface ContactService {
    Contact saveMessage(Contact contact);
    List<Contact> getAllMessages();
    Contact getMessageById(Long id);
    void deleteMessage(Long id);
}
