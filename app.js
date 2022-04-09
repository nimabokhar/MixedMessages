
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


// Products Array 
const products = [
    {
        id: 1,
        title: "Dad Jokes",
        price: "Random Dad Joke Generator",
        colors: [
          {
            code: "Website Only", // I have no idea what this is
            img: "./img/dadjokes1.jpg",
          },
        ],
      },
    {
      id: 2,
      title: "Pick Up Lines",
      price: "Random Pick Up Line Generator",
      colors: [
        {
          code: "Website Only", // I have no idea what this is
          img: "./img/pickupLines1.png",
        },
      ],
    },

    {
      id: 3,
      title: "Puns",
      price: "Random Puns Generator",
      colors: [
        {
          code: "Website Only", // I have no idea what this is
          img: "./img/puns1.jpg",
        },
      ],
    },

    {
      id: 4,
      title: "Movie Quotes",
      price: "Random Movie Quotes Generator",
      colors: [
        {
          code: "Website Only", // I have no idea what this is
          img: "./img/movieQuotes1.jpg",
        },
      ],
    },
    
  ];

// Choosing the product

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColor = document.querySelectorAll(".color")
const currentProductMembership = document.querySelectorAll(".membership")

// First section animation

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        // Change the currend slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        // Change the chosen product
        chosenProduct = products[index]

        // Change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // Assign Self or Host
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;

        });
    });
});

// Switch image for Web only/Hosting
currentProductColor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

// Membership selection
currentProductMembership.forEach((membership, index) => {

    membership.addEventListener("click", () => {

        currentProductMembership.forEach((membership) => {

            membership.style.color = "white"
            membership.style.color = "black"

        })

        membership.style.color = "black"
        membership.style.color = "white"
    })
})

