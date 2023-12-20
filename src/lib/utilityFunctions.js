// input is a string
export const createTitle = (input) => {
  return input.split('-').map(word => { return word[0].toUpperCase() + word.substring(1) }).join(' ');
}

export const chartData = (data) => {
  let temp = data.map(entry => ({
      date: new Date(entry.date).toLocaleDateString('en-US'),
      price: parseFloat(entry.price.split('-')[0].slice(1))
    }));

  let dates = new Set();
  let prices = [];

  for (let i = 0; i < temp.length; i++) {
    if (!dates.has(temp[i].date)) {
      dates.add(temp[i].date);
      prices.push(temp[i].price);
    }
  }

  return {
    priceData: prices.reverse(),
    dateData: Array.from(dates).reverse()
  }
};