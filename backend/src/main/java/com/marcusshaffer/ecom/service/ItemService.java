package com.marcusshaffer.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcusshaffer.ecom.repository.ItemRepository;

@Service
public class ItemService {

    private ItemRepository itemRepository;

    // Inject into dependency
    @Autowired
    ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }
    
    
}
