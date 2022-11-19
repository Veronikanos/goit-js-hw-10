var o;o="Brunei",console.log(`hello ${o}`),fetch(`https://restcountries.com/v3.1/name/${o}`).then((o=>{if(!o.ok)throw new Error(o.status);return console.log(o),o.json()})).catch((o=>{console.log("Something wrong 😣")}));
//# sourceMappingURL=index.00af556d.js.map
