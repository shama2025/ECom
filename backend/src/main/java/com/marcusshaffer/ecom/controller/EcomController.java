package com.marcusshaffer.ecom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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
    public void registerUser(@RequestBody Account user){
       // return this.accountService.registerUser(user);
    }

    // GET /accounts/login
    @GetMapping("/accounts/login")
    public void loginUser(@RequestBody Account user){
        // return this.accountService.login(user);
    }

    // Item Endpoints

    // GET /item
    @GetMapping("/item")
    public void retrieveAllItems(){
        // return this.itemService.retrieveAllItems();
    }

    // GET /item/{id}
    @GetMapping("/item/{id}")
    public void retrieveItemById(@RequestBody int id){
        // return this.itemService.retrieveItemById(id);
    }

    // POST /item
    @PostMapping("/item")
    public void createItem(@RequestBody Item item){
        // return this.itemService.createItem(item);
    }

    // Add more endpoints when more functionality is added

}
