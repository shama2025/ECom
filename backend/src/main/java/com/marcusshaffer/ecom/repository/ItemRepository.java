package com.marcusshaffer.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcusshaffer.ecom.entity.Item;


public interface ItemRepository extends JpaRepository<Item,Integer>{
    
}
