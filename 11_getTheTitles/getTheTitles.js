const getTheTitles = function(books) {
    // 1st Solution
    // let titles = [];
    // for (let i = 0; i < books.length; i++) {
    //     titles[i] = books[i].title;
    // }

    // Second solution
    let titles = [];
    titles = books.map((item) => {
        return item.title;
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
