document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const customer = document.getElementById("customer"),
      freelancer = document.getElementById("freelancer"),
      blockCustomer = document.getElementById("block-customer"),
      blockFreelancer = document.getElementById("block-freelancer"),
      blockChoice = document.getElementById("block-choice"),
      btnExit = document.getElementById("btn-exit"),
      formCustomer = document.getElementById("form-customer"),
      ordersTable = document.getElementById("orders");

  const orders = [];

  customer.addEventListener("click", () => {
    blockCustomer.style.display = "block";
    blockChoice.style.display = "none";
    btnExit.style.display = "block";
  });

  freelancer.addEventListener("click", () => {
    blockFreelancer.style.display = "block";
    blockChoice.style.display = "none";
    btnExit.style.display = "block";
  });

  btnExit.addEventListener("click", () => {
    btnExit.style.display = "none";
    blockFreelancer.style.display = "none";
    blockCustomer.style.display = "none";
    blockChoice.style.display = "block";
  });

  formCustomer.addEventListener("submit", event => {
    event.preventDefault();

    const obj = {};

    const elements = [...formCustomer.elements]
    .filter(elem => (elem.tagName === "INPUT" && elem.type !== "radio") ||
        (elem.type === "radio" && elem.checked) ||
        elem.tagName === "TEXTAREA");
   
    elements.forEach(elem => {
     
        obj[elem.name] = elem.value;

    });

    formCustomer.reset();

    orders.push(obj);
    console.log(orders);
  });

  ordersTable.innerHTML += `
              <tr class="order">
                <td>1</td>
                <td>Lorem</td>
                <td class="doshirak"></td>
                <td>2019-12-31</td>
              </tr>
  `;

});
