# Initializes the databases

import sqlite3

def createUserTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY,
            fname VARCHAR(255),
            lname VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255)
        )
    """)

    con.commit()
    cursor.close()
    con.close()

def createTestDataUserTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        INSERT INTO users(id, fname, lname, email, password) VALUES      
        (1, 'Alice', 'Johnson', 'alice.johnson@example.com', 'password123'),
        (2, 'Bob', 'Smith', 'bob.smith@example.com', 'letmein'),
        (3, 'Carol', 'Williams', 'carol.williams@example.com', '123456'),
        (4, 'David', 'Brown', 'david.brown@example.com', 'admin'),
        (5, 'Eve', 'Davis', 'eve.davis@example.com', 'qwerty')
    """)

    con.commit()
    cursor.close()
    con.close()

def createListingTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS listing (
            id INTEGER PRIMARY KEY,
            userId INTEGER,
            listingImage VARCHAR(255),
            shortDesc VARCHAR(25),
            longDesc TEXT,
            price REAL,
            FOREIGN KEY (userId) REFERENCES users(id)
        )
    """)

    con.commit()
    cursor.close()
    con.close()

def createTestDataListingTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        INSERT INTO listing (id, userId, listingImage, shortDesc, longDesc, price) VALUES
        (1, 1, 'img1.jpg', 'Red Cotton Shirt', 'Soft, breathable cotton shirt in red. Perfect for everyday wear.', 19.99),
        (2, 2, 'img2.jpg', 'Leather Wallet', 'Genuine leather wallet with multiple compartments for cards and cash.', 34.50),
        (3, 3, 'img3.jpg', 'Wireless Mouse', 'Ergonomic wireless mouse with long battery life and smooth tracking.', 25.00),
        (4, 4, 'img4.jpg', 'Ceramic Mug', 'Handmade ceramic mug, dishwasher safe and microwave friendly.', 12.75),
        (5, 5, 'img5.jpg', 'Bluetooth Speaker', 'Portable Bluetooth speaker with rich sound and waterproof design.', 45.00)
    """)

    con.commit()
    cursor.close()
    con.close()

def displayUserTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("SELECT * FROM users")
    for row in cursor.fetchall():
        print(row)

    cursor.close()
    con.close()

def displayListingTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("SELECT * FROM listing")
    for row in cursor.fetchall():
        print(row)

    cursor.close()
    con.close()

if __name__ == "__main__":
    createUserTable()
    createTestDataUserTable()
    displayUserTable()

    createListingTable()
    createTestDataListingTable()
    displayListingTable()
