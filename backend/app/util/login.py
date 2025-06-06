# This file handles the login logic

import sqlite3


def login_user(email, password):
    """Checks if user can login"""
    try:
        con = sqlite3.connect("ECOM.db")
        cursor = con.cursor()

        res = cursor.execute(
            "SELECT COUNT(*) FROM users WHERE email = ? AND password = ?",
            (email, password),
        )

        con.commit()
        cursor.close()
        con.close()

        if res.fetchone()[0] != 1:
            return {"is_login": False, "code": 401}
        return {"is_login": True, "code": 200}
    except:
        return {"is_login": False, "code": 500}
