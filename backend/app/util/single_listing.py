# This file will hold logic for getting a single item

import sqlite3


def get_single_listing(id):
    try:
        con = sqlite3.connect("ECOM.db")
        cursor = con.cursor()

        cursor.execute("SELECT * FROM listing WHERE id = ?", (id,))
        listing = cursor.fetchone()

        cursor.close()
        con.close()

        if listing is None:
            return {"is_available": False, "status_code": 404}  # Not found
        return {"is_available": True, "status_code": 200, "listing": listing}  # Found

    except Exception as e:
        print("Error fetching listing:", e)
        return {"is_available": False, "status_code": 500}  # Server Error
