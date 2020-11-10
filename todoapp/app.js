//app.js

const catalogue = [];

function createNewItem(name, price, availability) {
  if (catalogue.length >= 10) {
    console.log("There are already 10 items in the catalogue");
  } else {

    let item = {
      sku: catalogue.length,
      name: name,
      price: price,
      availability: availability || true,
    };
    catalogue.push(item);
  }
}
function toggleAvailability(buttonElement, index) {
  catalogue[index].availability = !catalogue[index].availability;

  if (!catalogue[index].availability) {
    buttonElement.previousElementSibling.classList.add("checked");
  } else {
    buttonElement.previousElementSibling.classList.remove("checked");
  }
}

createNewItem("Sun Gel ", "5,000");
createNewItem("Powerbank", "10,000");
createNewItem("HP X360", "420,340");
createNewItem("HP Spectre", "320,340");
createNewItem("Journal", "1,200");
createNewItem("Nike Slides", "18,000");
createNewItem("Yoga Mat", "5,000");
createNewItem("Bottle Water", 500);
createNewItem("Havit Headphones", "8,000");
createNewItem("Bread", 450);


let list = document.querySelector("ul");
for (var i = 0; i < catalogue.length; i++) {
  let li = document.createElement("li");
  li.innerHTML =
    `<span class=item${i}>` +
    (catalogue[i].sku + 1) +
    "  -  " +
    catalogue[i].name +
    "  -  ₦" +
    catalogue[i].price +
    `</span>` +
    `&nbsp;&nbsp;&nbsp;&nbsp;<button onClick="toggleAvailability(this, ${i})">Toggle Availability</button><hr>`;

  list.appendChild(li);
}
