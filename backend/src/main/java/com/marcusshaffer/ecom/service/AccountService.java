package com.marcusshaffer.ecom.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.marcusshaffer.ecom.entity.Account;
import com.marcusshaffer.ecom.repository.AccountRepository;

@Service
public class AccountService {
    
    private AccountRepository accountRepository;

    // Inject Repository
    @Autowired
    AccountService(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    // Methods

    /**
     * Registers New user
     * @param user
     * @return Response object of type Account with user ID
     */
    public ResponseEntity<?> registerUser(Account user){
           try {
            String email = user.getEmail();
            String password = user.getPassword();
            String firstName = user.getFirstName();
            String lastName = user.getLastName();
            Account newAccount = new Account();

            // Set Account columns
            newAccount.setEmail(email);
            newAccount.setFirstName(firstName);
            newAccount.setLastName(lastName);
            newAccount.setPassword(password);
            newAccount.setToken(UUID.randomUUID().toString());

            // Validation
            if (email == null || email.isBlank()) {
                return ResponseEntity.status(400).body("Email cannot be blank");
            }

            if (password == null || password.length() < 8) {
                return ResponseEntity.status(400).body("Password must be at least 8 characters");
            }

            if (accountRepository.checkEmail(email) != null) {
                return ResponseEntity.status(409).body("Email already exists");
            }

            Account registeredAccount = this.accountRepository.save(newAccount);

            return ResponseEntity.ok(registeredAccount);

        } catch (Exception e) {
            return ResponseEntity.status(400).body("An error occurred: " + e.getMessage());
        }
    }

    /**
     * Logs in user
     * @param user
     * @return Response object 
     */
    public ResponseEntity<?> login(Account user){
        try{
            String email = user.getEmail();
            String password = user.getPassword();
                        
             // Validation
            if (email == null || email.isBlank()) {
                return ResponseEntity.status(400).body("Email cannot be blank");
            }

            Account loggedInUser = this.accountRepository.loginUser(email, password);

            if(loggedInUser != null){
                loggedInUser.setToken(UUID.randomUUID().toString());
                return ResponseEntity.ok(loggedInUser);
            }

            return ResponseEntity.status(400).body("Login Unsuccesful");

        }catch(Exception e){
            return ResponseEntity.status(400).body("An error occurred: " + e.getMessage());
        }
  
    }

    public ResponseEntity<List<Account>> getAllUsers(){
        return ResponseEntity.ok(this.accountRepository.findAll());
    }
}
