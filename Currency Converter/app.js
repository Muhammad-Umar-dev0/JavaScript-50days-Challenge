let droplist = document.querySelectorAll("form select");
let fromCurrency = document.querySelector(".from select"); 
let toCurrency = document.querySelector(".to select");
let icon = document.querySelector(".icon");
let exchangeTxt = document.querySelector(".exchange_rate");
let getBtn = document.querySelector("button");


for (let i = 0; i < droplist.length; i++) {
    for (let currency_code in country_list) {
        let selected = 
            i === 0
                ? currency_code === "USD" 
                    ? "selected" 
                    : "" 
                : currency_code === "PKR"
                    ? "selected"
                    : "";

        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        droplist[i].insertAdjacentHTML("beforeend", optionTag);
    }

    droplist[i].addEventListener("change", (e) => {
        loadFlag(e.target);
    });
}

function loadFlag(element) {
    for (let code in country_list) {
        if (code === element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${country_list[code].toLowerCase()}/flat/64.png`;
        }
    }
}

getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    exchangeValue();
});

function exchangeValue() {
    const amount = document.querySelector("form input");
    let amountVal = amount.value;
    if (amountVal === "" || amountVal === "0") {
        amount.value = "1";
        amountVal = 1;
    }

    exchangeTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/245e89fe0cc1fdad5c5485a4/latest/${fromCurrency.value}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.conversion_rates[toCurrency.value];
            let total = (amountVal * exchangeRate).toFixed(2);
            exchangeTxt.innerText = `${amountVal} ${fromCurrency.value} = ${total} ${toCurrency.value}`;
        })
        .catch(() => {
            exchangeTxt.innerText = "Something went wrong";
        });
}

window.addEventListener("load", () => {
    exchangeValue();
});

icon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    exchangeValue();
});
