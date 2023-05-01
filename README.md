
I Enjoyed doing the task a lot! learned from it and really looking forward to hear from you, hoping good things :)

## Getting Set Up

1. In the repo root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm run start-dev` which should start both the server .


## API that was implemented

1. **_GET_** `/sellerProducts/` - Get products by ASIN & Locale (given as query param).

2. **_GET_** `/sellerProducts/:sellerName` - Returns a list of products by seller name (given as param).

3. **_GET_** `/sellerProducts/allProducts` - Returns a list of all products



1. **_POST_** `/sellerProducts/addProduct` - Add product to the db.
Ex of JSON that needs to be passed (Postman example) :
    {
        "asin": "test",
        "locale":"test",
        "seller_name":"testt",
        "availability": true,
        "price":99,
        "product_name":"test",
        "product_link":"test"
    }


1. **_DELETE_** `/sellerProducts/allProducts` - Deletes a product by ASIN & Locale that are passed in the query params.

1. **_PUT_** `/sellerProducts/allProducts` - Updates product by ASIN & Locale as query params.
need to pass in the body the fields that you want to edit.
*** ONLY product_name, product_link, price are editable

Ex:  {
        "price":99,
        "product_name":"test",
        "product_link":"test"
    }





