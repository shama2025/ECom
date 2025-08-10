package com.marcusshaffer.ecom.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Account user;

    private String imageUrl;

    @Lob
    private String longDescription;

    private String shortDescription;

    private int price;

    private String seller;

    private String category;

    // Constructors
    Item(){}

    Item(String imageUrl, String longDescription, String shortDescription, int price, String seller, String category) {
        this.imageUrl = imageUrl;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.price = price;
        this.seller = seller;
        this.category = category;
    }

    Item(Integer id, String imageUrl, String longDescription, String shortDescription, int price, String seller,
            String category) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.longDescription = longDescription;
        this.shortDescription = shortDescription;
        this.price = price;
        this.seller = seller;
        this.category = category;
    }

    // Getters
    public String getCategory() {
        return category;
    }

    public int getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public int getPrice() {
        return price;
    }

    public String getSeller() {
        return seller;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public Account getUser() {
        return user;
    }

    // Setters

    public void setCategory(String category) {
        this.category = category;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public void setUserId(Account user) {
        this.user = user;
    }

}
