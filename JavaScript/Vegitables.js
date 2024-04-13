const vegetables = [
  {
    off: "33%",
    img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "Carrot",
    beforePrice: 100,
    price: 56,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "15%",
    img: "https://images.unsplash.com/photo-1609190756694-1580c87618eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJyb2NvbGlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    name: "Broccoli",
    beforePrice: 120,
    price: 89,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "18%",
    img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Spinach",
    beforePrice: 98,
    price: 79,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "22%",
    img: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    name: "Tomato",
    beforePrice: 130,
    price: 99,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "12%",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Cucumber",
    beforePrice: 50,
    price: 29,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "35%",
    img: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsbCUyMHBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Bell Pepper",
    beforePrice: 103,
    price: 79,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "23%",
    img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Lettuce",
    beforePrice: 140,
    price: 99,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "24%",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    name: "Potato",
    beforePrice: 107,
    price: 89,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "34%",
    img: "https://images.unsplash.com/photo-1570723735746-c9bd51bd7c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dlZXQlMjBwb3RhdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Sweet Potato",
    beforePrice: 48,
    price: 29,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "22%",
    img: "https://images.unsplash.com/photo-1596056094719-10ba4f7ea650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Zucchini",
    beforePrice: 78,
    price: 49,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "12%",
    img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Onion",
    beforePrice: 89,
    price: 69,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "23%",
    img: "https://plus.unsplash.com/premium_photo-1666877049261-ea88f75e7be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FybGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    name: "Garlic",
    beforePrice: 143,
    price: 99,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "45%",
    img: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Cauliflower",
    beforePrice: 106,
    price: 99,
    delivery: "Free",
    quantity: 0,
  },
  {
    off: "20%",
    img: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Cabbage",
    beforePrice: 98,
    price: 49,
    delivery: "Free",
    quantity: 0,
  },
  {
    off: "24%",
    img: "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNwYXJhZ3VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    name: "Asparagus",
    beforePrice: 104,
    price: 79,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "26%",
    img: "https://media.istockphoto.com/id/1306889184/photo/healthy-fresh-locally-grown-spinich-showing-detail-of-base.webp?b=1&s=170667a&w=0&k=20&c=e0btnNUaKCTCJ6QnIdv1bwinFYbOstQqHJHndYJxZvA=",
    name: "Spinach",
    beforePrice: 100,
    price: 79,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "28%",
    img: "https://plus.unsplash.com/premium_photo-1680344513252-75de1cf16d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Kale",
    beforePrice: 80,
    price: 49,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "20%",
    img: "https://plus.unsplash.com/premium_photo-1666270423836-864dfa7071e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWdncGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Brinjal",
    beforePrice: 97,
    price: 59,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "27%",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Cucumber",
    beforePrice: 89,
    price: 29,
    delivery: "Free",
    quantity: 1,
  },
  {
    off: "34%",
    img: "https://images.unsplash.com/photo-1596564823703-d28706a620e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Peas",
    beforePrice: 108,
    price: 89,
    delivery: "Free",
    quantity: 1,
  },
];

//catching the soring part.
let sorting = document.querySelector("#filters");
var tempVegi = vegetables;
sorting.addEventListener("change", function () {
  let value = this.value;
  if (value == "Select") {
    var container = (document.querySelector("#Vegitables").innerHTML = "");
    console.log(vegetables);
    display(vegetables);
  } else if (value == "low-to-high") {
    tempVegi.sort(function (a, b) {
      return a.price - b.price;
    });
    var container = (document.querySelector("#Vegitables").innerHTML = "");
    display(tempVegi);
  } else if (value == "high-to-low") {
    tempVegi.sort(function (a, b) {
      return b.price - a.price;
    });
    document.querySelector("#Vegitables").innerHTML = "";
    display(tempVegi);
  } else if ((value = "Alphabetical")) {
    tempVegi.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; //
    });
    document.querySelector("#Vegitables").innerHTML = "";
    display(tempVegi);
  }
});

//Functions For Filter.
let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

checkBoxes.forEach((element) => {
  element.addEventListener("change", function () {
    if (element.checked) {
      if (element.value == "less-20") {
        const lesstwenty = vegetables.filter(function (element) {
          element.price < 20;
        });
        document.querySelector("#Vegitables").innerHTML = "";
        display(lesstwenty);
      } else if (element.value == "price-20-50") {
        const price20to50 = vegetables.filter(function (element) {
          return element.price >= 20 && element.price <= 50;
        });
        document.querySelector("#Vegitables").innerHTML = "";
        display(price20to50);
      } else if (element.value == "price-51-100") {
        const price51to100 = vegetables.filter(function (element) {
          return element.price >= 51 && element.price <= 100;
        });
        document.querySelector("#Vegitables").innerHTML = "";
        display(price51to100);
      } else if (element.value == "price-101-200") {
        const price101to200 = vegetables.filter(function (element) {
          return element.price >= 101 && element.price <= 200;
        });
        document.querySelector("#Vegitables").innerHTML = "";
        if (price101to200.length > 0) {
          display(price101to200);
        }
      }
    } else {
      document.querySelector("#Vegitables").innerHTML = "";
      display(vegetables);
    }
  });
});

display(vegetables);

function display(array) {
  //Catching the element.Vegitables
  var container = document.querySelector("#Vegitables");
  let data = JSON.parse(localStorage.getItem("data")) ?? [];

  let total = JSON.parse(localStorage.getItem("total")) ?? [];
  let totalCost = total[0] || 0;
  let totalQuantity = total[1] || 0;
  array.forEach((element) => {
    var cards = document.createElement("div");

    cards.className = "cards"; //Give class to the cards element.

    var off = document.createElement("p");
    off.className = "discount"; //assigining class to discount section.

    var image = document.createElement("img");
    image.src = element.img;
    image.classList = "vegitablesImage";

    var name = document.createElement("p");
    name.className = "VegiName"; //assigning class to name of the vegetable.

    var inputPrice = document.createElement("input");
    inputPrice.placeholder = `1 Kg - Rs ${element.price}.00`;
    inputPrice.className = "selectInput";

    var allDetails = document.createElement("div");
    allDetails.className = "Details"; //Given class to details having deliver , price , quntaty and all.
    var newContainer = document.createElement("div");
    //For price.
    var mrp = document.createElement("span");
    var previousPrice = document.createElement("span");
    previousPrice.className = "prevPrice"; //Class to previous price.
    var currentPrice = document.createElement("span");
    currentPrice.className = "currPrice";

    //Deleviry :-
    var deleviry = document.createElement("div");

    deleviry.className = "delivery";
    var deleviryImg = document.createElement("img");
    //   deleviryImg.style.width='100%';
    deleviryImg.src =
      "https://w7.pngwing.com/pngs/558/519/png-transparent-computer-icons-delivery-symbol-symbol-miscellaneous-angle-text.png";
    var deleviryCont = document.createElement("span");

    name.innerText = element.name;
    //Add and quantity buttons :-
    var quantityContainer = document.createElement("div");
    var quantity = document.createElement("span");

    var inputQuantity = document.createElement("input");
    console.log(inputQuantity.value);
    inputQuantity.className = "InputQuan";
    inputQuantity.type = "number";
    var Addbtn = document.createElement("button");
    Addbtn.style.padding = "2px";
    Addbtn.style.margin = "4px";

    //Assigning the values
    off.innerText = `GET ${element.off} OFF`;
    mrp.innerText = "MRP";
    previousPrice.innerText = `RS ${element.beforePrice}`;
    currentPrice.innerText = `Rs ${element.price}`;
    deleviryCont.innerText = `Standard Delivery : ${element.delivery}`;
    quantity.innerText = "Qty";
    inputQuantity.innerText = 1;
    Addbtn.innerText = "Add 🛒";
    Addbtn.style.cursor = "pointer";

    //put values in local storage.
    Addbtn.addEventListener("click", () => {
      let data = JSON.parse(localStorage.getItem("data")) ?? [];
      data.push(element);
      totalCost += element.price;
      totalQuantity += 1;
      total[0] = totalCost;
      total[1] = totalQuantity;
      let cartItemsSpans = document.getElementsByClassName("cart-items");
      for (let ci of cartItemsSpans){
        ci.innerText = totalQuantity;
      }
      localStorage.setItem("total", JSON.stringify(total));
      localStorage.setItem("data", JSON.stringify(data));
    });

    //append the values to the containers.
    quantityContainer.append(quantity, inputQuantity, Addbtn);
    deleviry.append(deleviryImg, deleviryCont);
    newContainer.append(mrp, previousPrice, currentPrice);
    allDetails.append(newContainer, deleviry, quantityContainer);
    cards.append(
      off,
      image,
      name,

      inputPrice,
      // newContainer,
      // deleviry,
      allDetails
      // quantityContainer
    );

    container.appendChild(cards);
  });
}
