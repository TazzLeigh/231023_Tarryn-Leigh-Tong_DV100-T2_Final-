let sammichOrder = [];

makeSammich = () => {
  let sammichTotal = 0;

  // Get Radio Options
  let breadType = document.getElementsByName("baseRadio");
  let baseValue;
  for (let i = 0; i < breadType.length; i++) {
    if (breadType[i].checked) {
      baseValue = breadType[i].value;
      sammichTotal = sammichTotal + +breadType[i].dataset.cost;
    }
  }

  let toppingOptions = document.getElementsByName("toppings");
  for (let i = 0; i < toppingOptions.length; i++) {
    if (toppingOptions[i].checked) {
      sammichTotal = sammichTotal + +toppingOptions[i].dataset.cost;
    }
  }

  let sauceOptions = document.getElementsByName("sauces");
  for (let i = 0; i < sauceOptions.length; i++) {
    if (sauceOptions[i].checked) {
      sammichTotal = sammichTotal + +sauceOptions[i].dataset.cost;
    }
  }

  sammichOrder.push({
    sammichBase: baseValue,
    sammichToppings: toppingOptions,
    sammichPrice: sammichTotal
  });

  document.getElementById("realTimeCost").innerHTML = "R0.00";
  document.getElementById("sammichOrder").reset();
}

realTimeCost = () => {
  let breadType = document.getElementsByName("baseRadio");
  let realTimePrice = 0;
  for (let i = 0; i < breadType.length; i++) {
    if (breadType[i].checked) {
      realTimePrice = realTimePrice + +breadType[i].dataset.cost;
    }
  }

  let toppingOptions = document.getElementsByName("toppings");
  for (let i = 0; i < toppingOptions.length; i++) {
    if (toppingOptions[i].checked) {
      realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost;
    }
  }

  document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice.toFixed(2);
}

displayOrder = () => {
  let area = document.getElementById("orders");
  let total = document.getElementById("orderTotal");
  let overAllTotal = 0;

  for (let i = 0; i < sammichOrder.length; i++) {
    let base = sammichOrder[i].sammichBase;
    let toppings = [];
    let toppingOptions = sammichOrder[i].sammichToppings;
    for (let j = 0; j < toppingOptions.length; j++) {
      if (toppingOptions[j].checked) {
        toppings.push(toppingOptions[j].value);
      }
    }
    let price = sammichOrder[i].sammichPrice;

    overAllTotal += price;

    area.innerHTML += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Sandwich ${i + 1}</h5>
          <p class="card-text"><strong>Base:</strong> ${base}</p>
          <p class="card-text"><strong>Toppings:</strong> ${toppings.join(", ")}</p>
          <p class="card-text"><strong>Price:</strong> R${price.toFixed(2)}</p>
        </div>
      </div>
    `;
  }

  total.innerHTML = "R".
