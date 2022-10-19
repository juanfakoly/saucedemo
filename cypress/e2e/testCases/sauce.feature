Feature: As a user I want to get saucedemo to place an order of some products

  Scenario Outline: Buy a bike Light
    Given a logged user is on products page
    When the user add to cart the "<product>" product
    And going to the shopping cart
    Then the user must visualize the product into the cart

    Examples: 
      | product               |
      | Sauce Labs Bike Light |

