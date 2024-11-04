const getTheTitles = function() {
let titlesArr = [];
    for (const book in books) {
        titlesArr.push(books.title);
    }
  return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
