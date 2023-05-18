# ecomApp
# How to run it locally?
Clone the repository: ```git clone https://github.com/IshitaSrivast/ecomApp.git```

Change Directory: ```cd ecomApp```


Install Dependencies: ````yarn```` or ```npm i``` 


Start: ```npm start``` or ```yarn start``` to run the project locally
# Features and Structure

## Product Listing and Shopping Cart
The Home Page shows the list of the products based on category. The category can be changed using the slide buttons present on the carousel image. Also, Explore sections lets us
view the products of all types in a grid of 4 products per page. Also, Search tab can be used to find the list of the products based on their type, for example, laptops, jackets and so on.
All these listing pages give a small description of the product and buy now buttons direct to the ProductDetail Page where an enlarged image along with other information can be viewed. The user
can add the product in the cart from the Add to Cart button. You can go the cart using the Cart button and change the quantity of the products.

## Use of Mock product API
```https://fakestoreapi.com/docs``` has been used to make the project realistic.  

## Asynchronous handling for API calls and loading screen
The Loading component has been designed to 
## Search functionality
The search results update based on the key input.
## Pagination feature
The pagination feature can be viewed on the Explore Page
## State Management using Redux
The state of the cart has been managed using Redux. Related code componenents can be found in the Redux folder

# Structure

## Header 
The header consists of the topmost navigation bar with the items as a Home icon, Explore and Search button. t provides a responsive navigation bar with navigation links for the homepage, explore page, and search items page.
Additionally, it includes a branded logo or heading for the website and buttons for login, signup, and the shopping cart. 
## Home
The Home component is a React functional component that represents the home page of an e-commerce website. It displays a carousel of images and allows the user to navigate through different slides by clicking on indicators or using previous and next buttons. The component fetches product data from an external API and displays the products based on the selected slide category. While the data is being fetched, a loading spinner is displayed. Once the data is loaded, the products are rendered in a list format. 
## Product
Used in the Home Component to display the products based on category.It receives two props: products, which is an array of all products, and category, which is an optional string representing the selected category of products to display.The filtered products are mapped over using the map function, and the cardItem function is called for each product to render the product cards. The product cards are then displayed in a row with the help of the Bootstrap grid system.
## ProductDetails
The ProductDetail component is a React functional component that represents the product detail page of an e-commerce website. It retrieves the product ID from the URL parameters using the useParams hook from the react-router package. The component fetches the details of the specific product from an external API based on the provided ID. While the data is being fetched, a loading spinner is displayed. Once the data is loaded, the product details are rendered, including the product image, title, price, and description.
## Explore
Explore Component utilizes React's useState and useEffect hooks to manage the state of the component.
The results state variable stores an array of results fetched from the API.
The currentPage state variable keeps track of the currently displayed page.
The totalPages state variable represents the total number of pages available based on the number of results.
The isLoading state variable is used to determine if the results are still being fetched from the API.
The useEffect hook is used to fetch the results from the API when the component mounts.
The fetchResults function is an asynchronous function that fetches the results from the API endpoint. It updates the results array, calculates the totalPages based on the number of results, and sets isLoading to false.
The renderResults function renders the paginated results. It slices the results array based on the currentPage and displays each result in a card format. Each card contains the image, title, price, and a "Buy Now" button that links to the product detail page.
The goToPreviousPage and goToNextPage functions handle the pagination functionality by updating the currentPage state variable when the previous or next buttons are clicked.
The component conditionally renders a loading spinner while the results are being fetched (isLoading is true). Once the results are loaded, it renders the renderResults function to display the paginated results.
The component also includes a pagination section with "Previous" and "Next" buttons. The buttons are disabled if the current page is the first or last page, respectively.


The component also manages the state of the "Add to Cart" button. Initially, the button displays "Add to Cart" indicating that the product is not in the cart. When the button is clicked, the handleCart function is called, which dispatches the appropriate action (addItem or delItem) from the Redux store based on the current state of the button. If the product is not in the cart, it is added by dispatching the addItem action and changing the button text to "Remove from Cart". If the product is already in the cart, it is removed by dispatching the delItem action and changing the button text back to "Add to Cart".
## Search
The component utilizes React's useState and useEffect hooks.
The searchQuery state variable stores the current search query entered by the user.
The searchResults state variable stores the filtered results based on the search query.
The isLoading state variable is used to determine if the search results are still being fetched or processed.
The useEffect hook is used to fetch the search results whenever the searchQuery changes and loading wheel is displayed while the results are being fetched.
`
## SearchItemsResults
The SearchResultItem component renders a single item in the search results list displaying title, description and buy now button. 
## Cart
The Cart component is responsible for rendering the shopping cart page in an e-commerce application.

It utilizes the React Redux library to access the cart state from the Redux store using the useSelector hook.
The state variable stores the array of items in the cart retrieved from the Redux store.
The dispatch function is used to dispatch actions to add or remove items from the cart, imported from the addItem and delItem actions.
The handleClose function is called when the user clicks the close button on an item in the cart. It dispatches a delItem action to remove the item from the cart.
The handleCartPlus function is invoked when the user clicks the plus button to increase the quantity of an item in the cart. It dispatches an addItem action to increment the quantity of the item.
The handleCartMinus function is triggered when the user clicks the minus button to decrease the quantity of an item in the cart. It dispatches a delItem action to decrement the quantity of the item.
The cartItems function is a helper function that renders the individual cart item components. It displays the item's image, title, price, quantity, and total price. It also provides buttons to decrease or increase the item's quantity.
The emptyCart function is called when the cart is empty. It displays a message indicating that the cart is empty.
The button function renders the "Proceed to Checkout" button, which is only shown if there are items in the cart.
The Cart component conditionally renders the empty cart message, the individual cart items, and the checkout button based on the length of the state array.
## CheckOut
The CheckOut component uses the useSelector hook from react-redux to access the state of the items added to the cart.
The component initializes a total variable to keep track of the total price of the items in the cart.
