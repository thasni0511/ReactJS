
var product= [
      { id: 101, name: "bag", price: 1200, category: "stationary", image: "Bag.jpg" },
      { id: 102, name: "book", price: 800, category: "stationary" , image: "book.jfif" },
      { id: 103, name: "pen", price: 300, category: "stationary" , image: "Pen.jfif" },
      { id: 104, name: "phone", price: 12000, category: "Electronics" , image: "phone.webp"},
      { id: 105, name: "Laptop", price: 45000, category: "Electronics" , image: "Laptop.jfif"}
    ];

    var newarray = { id: 106, name: "mouse", price: 300, category: "Electronics", image: "mouse.jpg" };

    product=[...product,newarray]; //spread operator

//spread operator displaying


let newarrivals = "";
product.forEach(({ name, price, category, image }) => {
    newarrivals += `
        <div class="product-card">
            <img src="${image}" alt="${name}">
            <p>${name}</p>
            <p>₹${price}</p>
            <p>Category: ${category}</p> 
        </div>
    `;
});
document.getElementById("new").innerHTML = newarrivals;

    var filter_prd = product.filter(prd => prd.price < 10000);
let result = "";
// template literals
filter_prd.forEach(pd => { 
    result += `
        <div class="product-card">
            <img src="${pd.image}" alt="${pd.name}">
            <p>${pd.name} - ₹${pd.price}</p>
        </div>
    `; 
});
document.getElementById("res").innerHTML = result;



    // var map_names=product.map(prd=>prd.name);
    var name_show = "";
product.forEach(({ name, price, category, image }) => { // With object destructuring, directly extract the properties from the object in a single line
    // can directly use name, price, category, and image
    name_show += `
        <div class="product-card">
            <img src="${image}" alt="${name}">
            <p>${name}</p>
             <p>₹${price}</p>
            <p>${category}</p> 
        </div>
    `;
});
document.getElementById("name").innerHTML = name_show; 

//sto

var applydiscount = (products, discount) =>
  products.map(p => ({
    name: p.name,
    originalPrice: p.price,
    discountedPrice: p.price - (p.price * discount / 100),
    image: p.image
  }));

var discountprice = applydiscount(product, 10);

let discount_res = "<div style='display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;'>";

discountprice.forEach(p => {
  discount_res += `
    <div style="text-align: center;">
      <img src="${p.image}" alt="${p.name}" style="width: 100px; height: 100px;"><br>
      <strong>${p.name}</strong><br>
      <span style="text-decoration: line-through; color: gray;">₹${p.originalPrice}</span><br>
      <span style="color: green; font-weight: bold;">₹${p.discountedPrice.toFixed(2)}</span>
    </div>
  `;
});

discount_res += "</div>";
document.getElementById("discount").innerHTML = discount_res;

                var processproducts = (products, callback) => {
                callback(products);
            };

            var filter_prds = (products) => {
    let result_prd = "";
    products.filter(prd => prd.price > 10000).forEach(pd => {
        result_prd += `
            <div class="product-card">
                <img src="${pd.image}" alt="${pd.name}">
                <p>${pd.name}</p>
                <p>₹${pd.price}</p>
            </div>
        `;
    });
    document.getElementById("res1").innerHTML = result_prd;
};
            
            processproducts(product, filter_prds);

  


