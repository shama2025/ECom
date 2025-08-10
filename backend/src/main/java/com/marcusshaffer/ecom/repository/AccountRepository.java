package com.marcusshaffer.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcusshaffer.ecom.entity.Account;

public interface AccountRepository extends JpaRepository<Account,Integer>{
    
}
