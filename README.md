# distributed-systems
Building design patterns, concepts of distributed systems (used in microservices event sourcing systems)

## Topics to cover

* What is Distributed Systems?
* Build a simple ecommerce monolith
* Decoupling the monolith
* Develop a distributed system

## ECommerce application using nodejs

### Functional requirements

* User should be able to look through the products
* User should be able to select products and add to cart
* User should be able to place order for the products added in cart
* User should be able to add reviews for product
* User should be able to see the order history

### Services

* Users
* Products
* Reviews
* Orders
* ProductsQuery
* OrdersQuery
* Carts
* EventBus

### Getting Started

* Create the above services in nodejs with in memory database
* EventBus will also be a simple HTTP REST API


