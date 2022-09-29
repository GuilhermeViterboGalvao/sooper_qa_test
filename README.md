# Sooper QA Engineer test

## What are we expecting from you?
The idea is to test your ability to validate API rules, check if you can find bugs, and report them.

## About this API
The idea of this API is to make a simple C.R.U.D of a contact.
A contact has only two attributes (name and phone). The attribute id is the key to finding a contact.
You will only have an ID when you create a new contact.
Each ID must be unique by contact.

| Method | Uri| Description |
|--------|----|-------------|
| POST   | /contact | Create a new contact |
| PUT    | /contact/:id | Update a contact by ID |
| DELETE | /contact/:id | Delete a contact by ID |
| GET    | /contact/:id | Return a contact by ID |
| GET    | /contacts    | Lista all contacts     |

### Rules for create a new contact
* You should always inform a name and a phone number, which means that those fields can't be null or empty.
    * A name must have at least three characters.
    * A phone should follow this number mask (XXX) XXXXX - XXXX.

### Rules for update a contact
* You should inform an ID to be able to update a contact.
    * This ID can't be null, empty, or less than 0.
* The rules for updating a contact are the same as creating one.
* If the system can't find a contact to update based on the ID informed, then the response should be empty.
* If it finds the contact to be updated, then the response should be the contact updated.

### Rules for delete a contact
* You should inform an ID to be able to update a contact.
    * This ID can't be null, empty, or less than 0.
* If the system can't find a contact to delete based on the ID informed, then the response should be empty.
* If it finds the contact to be deleted, then the response should be the contact deleted.

### Rules for get a contact
* You should inform an ID to be able to search a contact.
    * This ID can't be null, empty, or less than 0.
* If the system can't find a contact based on the ID informed, then the response should be empty.
* If it finds the contact, then the response should be the contact found.

## What do you have to do?
* Create a test for all those endpoints.
* Guarantee that they are working based on the rules explained above.
    * If one test fails, be able to report why.
* Create new scenarios of tests based on the way that the API work.

## Which tools should you use for this test?
Anything you want or prefeer.
Cypress will be a differentiator.

## Good look!

---

# How to run it?
```sh
$: npm run start
```
It'll start the server at localhost:3000.