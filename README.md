# SAUCEDEMO TEST

To run this project is needed npm and node installed in your system.

Please first at all execute this command into your terminal  ```npm install```

In the root folder is needeed to add a ``.env`` file including the credentials

```env
USERNAME=myusername
PASSWORD=mypassword
```
To execute the testing can be uses the following commands.

```npm
npm run cypress:open

or

npm run cypress:run
```

The following are the test cases created for this test.
```Gherkin
Scenario Outline: Buy a bike Light
    Given a logged user is on products page
    When the user add to cart the <product> product
    And going to the shopping cart
    Then the user must visualize the product into the cart

    Examples:

    | product               |
    | --------------------- |
    | Sauce Labs Bike Light |
```

```Gherkin
 Scenario: Reset app state
    Given a logged user is on products page
    When the user add to cart various products
    And select reset app state
    Then the user should verify that the shopping cart is empty
```

## BUG REPORT
### 1. Reset page status doesn't work for filters

#### Description

When you have selected any filter and then try to reset page status you will notice the page does not reset the filters like initially they were.

### Reporter
Juan Esteban Munoz Hoyos

### Priority
Low

### Severity
Minor

### Environment
Production

### Attachment

### Assignee
Mauricio Viscarra

### 2. Complete an order without items related

#### Description

When you going to shipping cart page, select the checkout button, and fills the shipping information and finish the order. The system allow you place the order even when you did not select any item.

### Reporter
Juan Esteban Munoz Hoyos

### Priority
High

### Severity
Major

### Environment
Production

### Attachment

### Assignee
Mauricio Viscarra