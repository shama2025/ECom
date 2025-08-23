package com.marcusshaffer.ecom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.marcusshaffer.ecom.entity.Account;
import com.marcusshaffer.ecom.entity.Item;
import com.marcusshaffer.ecom.repository.AccountRepository;
import com.marcusshaffer.ecom.repository.ItemRepository;

@Service
public class ItemService {

    private ItemRepository itemRepository;
    private AccountRepository accountRepository;

    // Inject into dependency
    @Autowired
    ItemService(ItemRepository itemRepository, AccountRepository accountRepository){
        this.itemRepository = itemRepository;
        this.accountRepository = accountRepository;
    }

    // Methods

    /**
     * When called returns a list of items in the repository
     * @return List of all items in repository
     */
    public ResponseEntity<List<Item>> retrieveAllItems(){
        return ResponseEntity.ok(this.itemRepository.findAll());
    }

    /**
     * 
     * @param id
     * @return A Response object 
     */
    public ResponseEntity<?> retrieveItemById(int id){
        try{
            return ResponseEntity.ok(this.itemRepository.findById(id));
        }catch(Exception e){
            return ResponseEntity.status(400).body("An error occured: " + e.getMessage());
        }
    }
    
    /**
     * Create a new item
     * @param item
     * @return A Response object containing data in regards to the item
     */
    public ResponseEntity<?> createItem(Item item){
        try{
            System.out.println(item.getShortDescription());
            String imageUrl = item.getImageUrl();
            String longDesc = item.getLongDescription();
            String shortDesc = item.getShortDescription();
            int price = item.getPrice();
            String seller = item.getSeller();
            String category = item.getCategory();
            Account user = item.getUser();

            // Check if price and seller and category and shortDesc aren't null

            if(this.accountRepository.findById(user.getId()).isEmpty()){
                return ResponseEntity.status(400).body("User does not exist");
            }

            if(price == 0){
                return ResponseEntity.status(400).body("Price field is blank!");
            }

            if(seller == null || seller.isEmpty()){
                return ResponseEntity.status(400).body("Seller field is blank!");
            }

            if(category == null || category.isEmpty()){
                return ResponseEntity.status(400).body("Category field is null!");
            }

            if(shortDesc == null || shortDesc.isEmpty()){
                return ResponseEntity.status(400).body("Short descripttion is null!");
            }

            Item newItem = new Item();

            newItem.setCategory(category);
            newItem.setPrice(price);
            newItem.setImageUrl(imageUrl);
            newItem.setLongDescription(longDesc);
            newItem.setSeller(seller);
            newItem.setShortDescription(shortDesc);
            newItem.setUser(user);

            Item registerdItem = this.itemRepository.save(newItem);

            return ResponseEntity.ok(registerdItem);

        }catch(Exception e){
            return ResponseEntity.status(400).body("An error has occured: " + e.getMessage());
        }
    }
    
}
