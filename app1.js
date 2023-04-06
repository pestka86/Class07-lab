"use strict";

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

function CookieStores(
  name,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerSale,
  customersEachHour,
  cookiesEachHour
)
  
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.customersEachHour = this.calcCustomersEachHour();
    this.cookiesEachHour = this.calcCookiesEachHour();
    this.totalDailyCookies = totalDailyCookies;

    CookieStores.prototype.calcCustomersEachHour = function () {
      for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(
          random(this.minCustPerHour, this.maxCustPerHour)
        );
        }
    };
    CookieStores.prototype.calcCookiesEachHour = function () {
      for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(
          this.customersEachHour[i] * this.avgCookiesPerSale
        );
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
      }
    };

      CookieStores.prototype.render = function ()
    {
      this.calcCustomersEachHour();
      this.calcCookiesEachHour();
      const unorderedList = document.getElementById("dubai");
      for (let i = 0; i < hours.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent =
          hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
    
  

  const cookieStore1 = new CookieStores("Seattle", 23, 65, 6.3, [], [], a());
  const cookieStore2 = new CookieStores("Tokyo", 3, 24, 1.2, [], [], a());
  const cookieStore3 = new CookieStores("Dubai", 11, 38, 2.3, [], [], a());
  const cookieStore4 = new CookieStores("Paris", 20, 38, 2.3, [], [], a());
  const cookieStore5 = new CookieStores("Lima", 2, 16, 4.6, [], [], a());

    }
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
