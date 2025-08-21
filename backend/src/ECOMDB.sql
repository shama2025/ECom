-- This is not executed, just used to help with layout of Database
CREATE TABLE IF NOT EXISTS account (
            id INTEGER PRIMARY KEY,
            fname VARCHAR(255),
            lname VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255))

CREATE TABLE IF NOT EXISTS item (
            id INTEGER PRIMARY KEY,
            userId INTEGER,
            listingImage VARCHAR(255),
            shortDesc VARCHAR(25),
            longDesc TEXT,
            price REAL,
            FOREIGN KEY (userId) REFERENCES users(id)
        )

INSERT INTO item (id, userId, listingImage, shortDesc, longDesc, price) VALUES
        (1, 1, 'img1.jpg', 'Red Cotton Shirt', 'Soft, breathable cotton shirt in red. Perfect for everyday wear.', 19.99),
        (2, 2, 'img2.jpg', 'Leather Wallet', 'Genuine leather wallet with multiple compartments for cards and cash.', 34.50),
        (3, 3, 'img3.jpg', 'Wireless Mouse', 'Ergonomic wireless mouse with long battery life and smooth tracking.', 25.00),
        (4, 4, 'img4.jpg', 'Ceramic Mug', 'Handmade ceramic mug, dishwasher safe and microwave friendly.', 12.75),
        (5, 5, 'img5.jpg', 'Bluetooth Speaker', 'Portable Bluetooth speaker with rich sound and waterproof design.', 45.00)

INSERT INTO account (id, fname, lname, email, password) VALUES      
        (1, 'Alice', 'Johnson', 'alice.johnson@example.com', 'password123'),
        (2, 'Bob', 'Smith', 'bob.smith@example.com', 'letmein'),
        (3, 'Carol', 'Williams', 'carol.williams@example.com', '123456'),
        (4, 'David', 'Brown', 'david.brown@example.com', 'admin'),
        (5, 'Eve', 'Davis', 'eve.davis@example.com', 'qwerty')
    