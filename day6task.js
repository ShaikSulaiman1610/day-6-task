// Fetching data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
   
    // a) Get all the countries from Asia continent/region using Filter method
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log("Countries from Asia:", asiaCountries);


    // b) Get all the countries with a population of less than 2 lakhs using Filter method
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);


    // c) Print the following details name, capital, flag, using forEach method
    console.log("Details of each country:");
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags[0]);
      console.log("-----------------------------------------");
    });


    // d) Print the total population of countries using reduce method
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    
    // e) Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => country.currencies['USD']);
    console.log("Countries using US dollars as currency:", usDollarCountries);
  })
  .catch(error => console.log("Error fetching data:", error));
