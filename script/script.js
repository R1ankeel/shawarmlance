document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const customer = document.getElementById("customer"),
      freelancer = document.getElementById("freelancer"),
      blockCustomer = document.getElementById("block-customer"),
      blockFreelancer = document.getElementById("block-freelancer"),
      blockChoice = document.getElementById("block-choice"),
      btnExit = document.getElementById("btn-exit"),
      formCustomer = document.getElementById("form-customer"),
      ordersTable = document.getElementById("orders"),
      modalOrder = document.getElementById("order_read"),
      modalOrderActive = document.getElementById("order_active");

  const orders = [];


  const renderOrders = () => {

    ordersTable.textContent = '';

    orders.forEach((order, i) => {
  
    ordersTable.innerHTML += `
              <tr class="order" data-number-order="${i}">
                <td>${i + 1}</td>
                <td>${order.title}</td>
                <td class="${order.currency}"></td>
                <td>${order.deadline}</td>
              </tr>`;

    })
  };


  const openModal = (numberOrder) => {
    const order = orders[numberOrder];
    const modal = !order.active ? modalOrderActive : modalOrder;

    const firstNameBlock = document.querySelector(".firstName"),
          modalTitleBlock = document.querySelector(".modal-title"),
          emailBlock = document.querySelector(".email"),
          descriptionBlock = document.querySelector(".description"),
          deadlineBlock = document.querySelector(".deadline"),
          currencyBlock = document.querySelector(".currency_img"),
          countBlock = document.querySelector(".count"),
          phoneBlock = document.querySelector(".phone");
     

    modal.style.display = "block";
  }

  ordersTable.addEventListener('click', event => {
    const target = event.target;
    const targetOrder = target.closest('.order');

    if (targetOrder) {
      openModal(targetOrder.dataset.numberOrder);
    }

  })

  customer.addEventListener("click", () => {
    blockCustomer.style.display = "block";
    blockChoice.style.display = "none";
    btnExit.style.display = "block";
  });

  freelancer.addEventListener("click", () => {
    blockFreelancer.style.display = "block";
    renderOrders();
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
  });

  

});
