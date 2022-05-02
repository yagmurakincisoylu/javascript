const washCarBtn = document.getElementById("washCarBtn");
const mowLawnBtn = document.getElementById("mowLawnBtn");
const pullWeedsBtn = document.getElementById("pullWeedsBtn");

const serviceOne = document.getElementById("serviceOne");
const serviceTwo = document.getElementById("serviceTwo");
const serviceThree = document.getElementById("serviceThree");

const removeBtnOne = document.getElementById("removeBtnOne");
const removeBtnTwo = document.getElementById("removeBtnTwo");
const removeBtnThree = document.getElementById("removeBtnThree");

const sendBtn = document.getElementById("sendBtn");

const totalAmount = document.getElementById("totalAmount");

washCarBtn.disabled = false;
mowLawnBtn.disabled = false;
pullWeedsBtn.disabled = false;

const addVisibility = (serviceName, serviceBtn) => {
    serviceName.classList.remove("visibility");
    serviceBtn.disabled = true;
};

const removeVisibility = (serviceName, serviceBtn) => {
    serviceName.classList.add("visibility");
    serviceBtn.disabled = false;
};

// add-service buttons

let serviceList = [];

const addService = (serviceName, serviceBtn, serviceText, servicePrice) => {
    addVisibility(serviceName, serviceBtn);
    totalPriceSum(serviceText, servicePrice);
};

const removeService = (serviceName, serviceBtn, serviceText, servicePrice) => {
    removeVisibility(serviceName, serviceBtn);
    totalPriceSum(serviceText, servicePrice);
};

const totalPriceSum = (serviceText, servicePrice) => {
    serviceList.push({name: serviceText, price: servicePrice});

    const totalPrice = serviceList.reduce ((total, item) => {
        return total + item.price;
    }, 0);

    totalAmount.textContent = `$${totalPrice}`
}

washCarBtn.addEventListener("click", () => {
    serviceText = "Wash Car";
    servicePrice = 10;
    addService(serviceOne, washCarBtn, serviceText, servicePrice);
});

mowLawnBtn.addEventListener("click", () => {
    serviceText = "Mow Lawn";
    servicePrice = 20;
    addService(serviceTwo, mowLawnBtn, serviceText, servicePrice);
});

pullWeedsBtn.addEventListener("click", () => {
    serviceText = "Pull Weeds";
    servicePrice = 30;
    addService(serviceThree, pullWeedsBtn, serviceText, servicePrice);
});

// remove-service buttons

removeBtnOne.addEventListener("click", () => {
    serviceText = "";
    servicePrice = -10;
    removeService(serviceOne, washCarBtn, serviceText, servicePrice);
});

removeBtnTwo.addEventListener("click", () => {
    serviceText = "";
    servicePrice = -20;
    removeService(serviceTwo, mowLawnBtn, serviceText, servicePrice);
});

removeBtnThree.addEventListener("click", () => {
    serviceText = "";
    servicePrice = -30;
    removeService(serviceThree, pullWeedsBtn, serviceText, servicePrice);
});

// send-service button

sendBtn.addEventListener("click", () => {
    removeService(serviceOne, washCarBtn);
    removeService(serviceTwo, mowLawnBtn);
    removeService(serviceThree, pullWeedsBtn);

    serviceList = [];
    totalPrice = 0;
    totalAmount.textContent = `$${totalPrice}`
});


