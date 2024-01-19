/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Har transaction ke liye iterate karo
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // Agar category map mein nahi hai, toh use add karo; nahi toh total spent ko update karo
    if (!categoryMap[category]) {
      categoryMap[category] = { category, totalSpent: price };
    } else {
      categoryMap[category].totalSpent += price;
    }
  });

  // Map ke values ko objects ki array mein convert karo
  const result = Object.values(categoryMap);

  return [result];
}

module.exports = calculateTotalSpentByCategory;
