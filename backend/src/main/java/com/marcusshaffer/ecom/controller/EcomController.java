package com.marcusshaffer.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marcusshaffer.ecom.entity.Account;
import com.marcusshaffer.ecom.service.AccountService;
import com.marcusshaffer.ecom.entity.Item;
import com.marcusshaffer.ecom.service.ItemService;

@RestController
public class EcomController {
    
    private AccountService accountService;
    private ItemService itemService;

    // Inject services
    @Autowired
    EcomController(AccountService accountService, ItemService itemService){
        this.accountService = accountService;
        this.itemService = itemService;
    }

    // Account Endpoints
    
    // POST /accounts/register
    @PostMapping("/accounts/register")
    public ResponseEntity<?> registerUser(@RequestBody Account user){
       return this.accountService.registerUser(user);
    }

    // GET /accounts/login
    @PostMapping("/accounts/login")
    public ResponseEntity<?> loginUser(@RequestBody Account user){
        return this.accountService.login(user);
    }

    // GET /accounts/users
    @GetMapping("/accounts/user")
    public ResponseEntity<List<Account>> getAllUser(){
        return this.accountService.getAllUsers();
    }

    // Item Endpoints

    // GET /item
    @GetMapping("/item")
    public ResponseEntity<?> retrieveAllItems(){
         return this.itemService.retrieveAllItems();
    }

    // GET /item/{id}
    @GetMapping("/item/{id}")
    public ResponseEntity<?> retrieveItemById(@PathVariable int id){
         return this.itemService.retrieveItemById(id);
    }

    // POST /item
    @PostMapping("/item")
    public ResponseEntity<?> createItem(@RequestBody Item item){
        return this.itemService.createItem(item);
    }

    // Add more endpoints when more functionality is added

}
