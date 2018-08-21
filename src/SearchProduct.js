import React, { Component } from 'react';
import './App.css';
import './SearchProduct.css';

// 2.	Small Project
// Create a simple react application with following use case:-
// •	Create a mock/sample JSON, which consists list of items say: number of products available with their Product ID’s, Product Types, Product Description, Product Name and thumbnail image.
// •	Use this Json to search(On Product Name) and display the filtered product list.
// •	Search should comprise of a search box and a CTA button.

const _productsObj = [
    {productID:1 ,productType:"Cookware" ,productDesc:"Lifelong Popular Non-Stick Cookware Set, 3-Pieces, Black/Grey (Induction and Gas Compatible)" ,productName:"Lifelong Popular Non-Stick", productThumbnail:"https://images-na.ssl-images-amazon.com/images/I/71Tltgi8H2L._SL500_SR160,160_.jpg"},
    {productID:2 ,productType:"Cookware" ,productDesc:"Nirlon Non-Stick Aluminium Cookware Set, 4-Pieces, Blue (FGD_FT28KD22KD24KD26)" ,productName:"Nirlon Non-Stick Aluminium", productThumbnail:"https://images-na.ssl-images-amazon.com/images/I/81b5zAyTRdL._SL500_SR117,160_.jpg"},
    {productID:3 ,productType:"Cookware" ,productDesc:"Vaartha 3 Piece Non Stick Gift Set (Deep Kadai,Fry Pan With Stainless Steel Lid And Dosa Tawa)" ,productName:"Vaartha 3 Piece Non Stick Gift Set", productThumbnail:"https://images-na.ssl-images-amazon.com/images/I/51sCqzP3SEL._SL500_SR160,160_.jpg"},
    {productID:4 ,productType:"Utensil and Container" ,productDesc:"Milton Executive Lunch Box Set, 3-Pieces, 260ml,Orange" ,productName:"Milton Executive Lunch Box Set", productThumbnail:"https://images-na.ssl-images-amazon.com/images/I/4197D-4HBEL._SL500_SR160,160_.jpg"},
    {productID:5 ,productType:"Utensil and Container" ,productDesc:"Milton Insulated 2 Stainless Steel Container Lunch Box" ,productName:"Milton Insulated 2 Stainless Steel Container Lunch Box", productThumbnail:"https://images-na.ssl-images-amazon.com/images/I/51n-PAsMhfL._SL500_SR160,160_.jpg"},
    {productID:6 ,productType:"Eatables" ,productDesc:"This is a Vegetarian product. >It is an organic salt. >Quantity: 500g > Colour: Black" ,productName:"Go Earth Organic Kala Namak, 500g", productThumbnail:"https://images-na.ssl-images-amazon.com/images/I/71wwmQqZYgL._SL500_SR160,160_.jpg"}
];

class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsObj: _productsObj
        };
    }
    resetHandler = () => {
        document.getElementById('searchbox').value = '';
        console.log(this.state.productsObj);
    }
    searchHandler = () => {}
    render() {
        return(
            <div className="search-section App">
                <div className="App-intro">
                2]	Small Project<br/>
                    Create a simple react application with following use case:-
                    <ul>
                        <li>Create a mock/sample JSON, which consists list of items say: number of products available with their Product ID’s, Product Types, Product Description, Product Name and thumbnail image.</li>
                        <li>Use this Json to search(On Product Name) and display the filtered product list.</li>
                        <li>Search should comprise of a search box and a CTA button.</li>
                    </ul>
                </div>
                <input id="searchbox" type="search" placeholder="Start typing Product Name to Search" />
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        );
    }
}

export default SearchProduct;