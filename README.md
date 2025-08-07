# React Bootstrap FakeStore App

The FakeStore E-Commerce App uses React, React Router, and FakeStoreAPI. The website will allow users to view, create, update, and delete products dynamically using API calls.

To install you can clone the code from the Git hub repository: https://github.com/ron-ferentini/FakeStoreApp.git

After cloning the applicaton code you will need to install the following components.
1 - npm install
2 - npm install react-router-dom
3 - npm install react-bootstrap
4 - npm install bootstrap
5 - npm install axios

The FakeStore E-Commerce App contains a Home Page, Product Listing page, Product Detail page, Add Product page, Edit Product page and Navigation Bar.

## Home Page
The home page displays a welcome message and a brief introduction to the store.
The button on the home page will naviagatg to the Product Listing page.

## Product Listing Page
The product listing page fetches and displays a list of products from FakeStoreAPI (https://fakestoreapi.com/products).  The products listed wil display the following information.
- 	Product Image
- 	Product Title
- 	Product Price
- 	Button to navigate to the product details

## Product Details Page
The details page displays detailed information for a single product.
Fetches the product data from FakeStoreAPI (https://fakestoreapi.com/products/:id).
The following information will be displayed on the products detail page

- Product image
- Product title
- Product description
- Product category
- Product price.
- Button to edit product,
- Button to delete the product.
- Button to go back to the Product Listing page.

## Edit Product Page
This page will allow users to update an existing product information.  When clicking the save button it will return the product detail page if it successfully saves otherwise it will display an error message.

Note: FakeStoreAPI will return a success response when you send a PUT request, but the changes in product information will not actually be saved in the API data.

## Delete Product Functionality
The Delete button will remove the product from the listing.  It used the FakeStoreAPI.  It will display a popup window if the delete is successful and then return to the Product Listing page.

Note: FakeStoreAPI will return a success response when you send a DELETE request, but the product will not actually be removed from the API data.

## Add Product Page
A form to create a new product using FakeStoreAPI (POST request).  The Add Product Page can be accessed from the Navigation Bar.

The form will allow you to input the following fields:
- Product title
- Price
- Description
- Category
- Submit button.

Clicking the Submit button wil send data to FakeStoreAPI and displays a confirmation message when the product is "created."

Note: FakeStoreAPI will return a successful response to your POST request, allowing you to test how your app handles product creation. However, the new product will not actually be saved or appear in the product list on future API calls, since this API is for testing purposes only.

## Navigation Bar
The Navigation bar is on the top of each page and includes the following links.

- Home
- Product Listing
- Add Product
