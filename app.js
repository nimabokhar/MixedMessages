
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


// Products/Mixed Messages Array 
const products = [
    {
        id: 1,
        title: "Dad Jokes",
        price: "Random Dad Joke Generator",
        description: "This creates a new random Dad Joke from our top quality selection",
        colors: [
          {
            img: "./img/dadjokes1.jpg",
          },
        ],
      },
    {
      id: 2,
      title: "Pick Up Lines",
      price: "Random Pick Up Line Generator",
      description: "This creates a new random Puck Up Line from our top quality selection",
      colors: [
        {
          img: "./img/pickupLines1.png",
        },
      ],
    },

    {
      id: 3,
      title: "Puns",
      price: "Random Puns Generator",
      description: "This creates a new random Pun from our top quality selection",
      colors: [
        {
          img: "./img/puns1.jpg",
        },
      ],
    },

    {
      id: 4,
      title: "Movie Quotes",
      price: "Random Movie Quotes Generator",
      description: "This creates a new random Movie Quote from our top quality selection",
      colors: [
        {
          img: "./img/movieQuotes1.jpg",
        },
      ],
    },
    
  ];



// Choosing the Product/Mixed Message Type

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")



// Important __________________________________________________________________

// Change the text for a description and then to the generated Mixed Message
const currentProductDescription = document.querySelector(".productDescription")

// ____________________________________________________________________________

// First section animation AKA Mixed Message Section

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        // Change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        // Change the chosen product
        chosenProduct = products[index]

        // Change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // IMPORTANT Change ProductDescripton/Mixed Message
        currentProductDescription.textContent = chosenProduct.description;

    });
});

// ____________________________________________________________________________



// Switch image for Type of Messages
currentProductColor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});


