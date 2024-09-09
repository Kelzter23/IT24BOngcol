const readline = require('readline');


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Alcohol {
    constructor(drinkname, rating, comment, price, location) {
        this.drink = drinkname;
        this.rate = rating;
        this.review = comment;
        this.value = price;
        this.area = location;
    }

    displayReview() {
        return `
Drink: ${this.drink},
Rating: ${this.rate}/10,
Comment: ${this.review},
Price: $${this.value.toFixed(2)},
Location: ${this.area}`;
    }
}

// example nga ilimnon
const drinks = [
    new Alcohol("Fundador", 8, "Unang shot, I miss you agad", 10, "Balay Imnanan"),
    new Alcohol("Tequila", 6, "Dili makaya, pirteng halanga", 9, "Balay Imnanan"),
    new Alcohol("Whiskey", 10, "Ahhhhhh, napaka smooth", 12, "Balay Imnanan"),
    new Alcohol("Gin bilog", 9, "Kiniiiii, lami kay tam-is", 5, "Balay Imnanan")
];


function displayDrinkOptions() {
    console.log("Choose a drink from the following options:");
    drinks.forEach((drink, index) => {
        console.log(`${index + 1}. ${drink.drink}`);
    });
}

// Pili ug pag rate ug pag comment
function promptUser() {
    displayDrinkOptions();

    r1.question('Enter the number of the drink you want to rate: ', (drinkChoice) => {
        const index = parseInt(drinkChoice) - 1;

        if (index < 0 || index >= drinks.length) {
            console.log("Invalid choice. Please restart the program.");
            r1.close();
            return;
        }

        r1.question('Enter your rating for this drink (0-10): ', (rating) => {
            const rate = parseInt(rating);
            
            if (isNaN(rate) || rate < 0 || rate > 10) {
                console.log("Invalid rating. Please enter a number between 0 and 10.");
                r1.close();
                return;
            }

            
            r1.question('Enter your comment for this drink: ', (comment) => {
                
                drinks[index].rate = rate;
                drinks[index].review = comment;
                
                console.log("Updated Drink Review:");
                console.log(drinks[index].displayReview());

              
                r1.close();
            });
        });
    });
}


promptUser();


