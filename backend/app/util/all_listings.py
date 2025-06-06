# This file will hold logic for getting all listings

import sqlite3

def get_all_listings():
    try:
        con = sqlite3.connect("ECOM.db")
        cursor = con.cursor()

        res = cursor.execute("SELECT * FROM listing").fetchall()

        con.commit()
        cursor.close()
        con.close()

        if res is None:
            return {"listing": res, "status_code": 401} # No listing available
        return {"listing": res, "status_code": 200} # Succesful listing get
    except:
        return {"listing": None, "status_code": 500} #Server error