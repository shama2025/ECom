# This file handles the signup logic

import sqlite3

def check_user_email(email):
    """Check the email prior to user creation"""
    try:
        con = sqlite3.connect("ECOM.db")
        cursor = con.cursor()

        cursor.execute("SELECT COUNT(*) FROM users WHERE email = ?", (email,))
        res = cursor.fetchone()[0]

        cursor.close()
        con.close()

        if res >= 1:
            return {"email_exists": True, "status_code": 401}  # Email Exists (Bad)
        return {"email_exists": False, "status_code": 200}     # Email doesn't exist (Good)

    except Exception as e:
        print("Error checking email:", e)
        return {"is_valid": False, "status_code": 500}  # Server Issue


def create_user(user):
    """Create a new user from a user object"""
    try:
        con = sqlite3.connect("ECOM.db")
        cursor = con.cursor()

        # INSERT assumes ID is auto-incremented in schema
        cursor.execute(
            "INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)",
            (user.fname, user.lname, user.email, user.password)
        )

        con.commit()
        cursor.close()
        con.close()

        return {"user_created": True, "status_code": 200}  # Successful Creation

    except Exception as e:
        print("Error creating user:", e)
        return {"user_created": False, "status_code": 500}  # Server Issue
