const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const seattle = {
  locationName: "Seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        random(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },

  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },

  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("seattle");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

seattle.render();

//Create your tokyo object here

const tokyo = {
  locationName: "Tokyo",
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        random(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("tokyo");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

tokyo.render();

//Create your dubai object here

const dubai = {
  locationName: "Dubai",
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        random(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("dubai");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

dubai.render();

//Create your paris object here
const paris = {
  locationName: "Paris",
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        random(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("paris");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

paris.render();

//Create your lima object here
const lima = {
  locationName: "Lima",
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        random(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("lima");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent =
        hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

lima.render();

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const allShops = [seattle, tokyo, dubai, paris, lima];

// function renderAllShops() {
//   for (let i = 0; i < allShops.length; i++) {
//     allShops[i].render;
//   }
// }

// renderAllShops();

//Create your dubai object here

//Create your paris object here

//Create your lima object here

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const allShops = [seattle, tokyo, dubai, paris, lima];

// function renderAllShops() {
//   for (let i = 0; i < allShops.length; i++) {
//     allShops[i].render;
//   }
// }

// renderAllShops();
