package com.marcusshaffer.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcusshaffer.ecom.repository.AccountRepository;

@Service
public class AccountService {
    
    private AccountRepository accountRepository;

    // Inject Repository
    @Autowired
    AccountService(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

}
