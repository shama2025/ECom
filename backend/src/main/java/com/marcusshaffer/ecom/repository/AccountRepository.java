package com.marcusshaffer.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.marcusshaffer.ecom.entity.Account;

public interface AccountRepository extends JpaRepository<Account,Integer>{

    // For login – fetch the user if username and password match
    @Query("SELECT a FROM Account a WHERE a.email = ?1 AND a.password = ?2")
    Account loginUser(String email, String password);

    // For checking email - check if email exists
    @Query("Select a from Account a where a.email = ?1")
    Account checkEmail(String username);
    
}
