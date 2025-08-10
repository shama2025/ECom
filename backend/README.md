## API Documentation

### Acouunts Endpoints

POST /accounts/register

This endpoint will pass in a request object. Check if the email is unique, if the email is taken return a response of 404. The response object will be the account that was registered with the id of the account. (May need to add a unique token for reusable login and create rules for login requirements)

GET /accounts/login

This endpoing will pass in a request obejct obtaining the username and password for a potential user. The response will be an object with the account. (May need to add a unique token for reusable login) Return a 404 error upon incorrect login.

### Item Endpoints

GET /item

This endpoint recieves all items from the database. The Response object will be a list of Item Objects

GET /item/{id}

This endpoint as a parameter of id, which points to some object in the database. The Response back will be a single Item object and a status code of 200. If no items exist then response with a 400 error

POST /item

This endpoint will perform a patch request, which will have a request object of a new item. Make sure it passes rules presented in the UI and if successful return the number of rows impacted (should be 1) if 0 return 404 error