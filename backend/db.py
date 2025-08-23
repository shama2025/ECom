# Used to create and manage the layout of the database
import sqlite3

def createUserTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS account(
            id INTEGER PRIMARY KEY,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            token VARCHAR(255)
        )
    """)

    con.commit()
    cursor.close()
    con.close()

def createTestDataUserTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        INSERT INTO account (id, first_name, last_name, email, password, token) VALUES      
        (1, 'Alice', 'Johnson', 'alice.johnson@example.com', 'password123', ''),
        (2, 'Bob', 'Smith', 'bob.smith@example.com', 'letmein',''),
        (3, 'Carol', 'Williams', 'carol.williams@example.com', '123456',''),
        (4, 'David', 'Brown', 'david.brown@example.com', 'admin',''),
        (5, 'Eve', 'Davis', 'eve.davis@example.com', 'qwerty','')
    """)

    con.commit()
    cursor.close()
    con.close()

def createListingTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS item (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            image_url VARCHAR(255),
            short_description VARCHAR(25),
            long_description TEXT,
            price REAL,
            seller VARCHAR(255),  -- Added seller column
            category VARCHAR(255),  -- Added category column
            FOREIGN KEY (user_id) REFERENCES account(id)  -- Corrected foreign key
        )
    """)

    con.commit()
    cursor.close()
    con.close()

def createTestDataListingTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("""
        INSERT INTO item (id, user_id, image_url, short_description, long_description, price, seller, category) VALUES
        (1, 1, 'img1.jpg', 'Red Cotton Shirt', 'Soft, breathable cotton shirt in red. Perfect for everyday wear.', 19.99, 'Alice', 'Apparel'),
        (2, 2, 'img2.jpg', 'Leather Wallet', 'Genuine leather wallet with multiple compartments for cards and cash.', 34.50, 'Bob', 'Accessories'),
        (3, 3, 'img3.jpg', 'Wireless Mouse', 'Ergonomic wireless mouse with long battery life and smooth tracking.', 25.00, 'Carol', 'Electronics'),
        (4, 4, 'img4.jpg', 'Ceramic Mug', 'Handmade ceramic mug, dishwasher safe and microwave friendly.', 12.75, 'David', 'Homeware'),
        (5, 5, 'img5.jpg', 'Bluetooth Speaker', 'Portable Bluetooth speaker with rich sound and waterproof design.', 45.00, 'Eve', 'Electronics')
    """)

    con.commit()
    cursor.close()
    con.close()

def displayUserTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("SELECT * FROM account")  # Corrected table name to 'account'
    for row in cursor.fetchall():
        print(row)

    cursor.close()
    con.close()

def displayListingTable():
    con = sqlite3.connect("ECOM.db")
    cursor = con.cursor()

    cursor.execute("SELECT * FROM item")  # Corrected table name to 'item'
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
