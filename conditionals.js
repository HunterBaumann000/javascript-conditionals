var clickCounter = 0;
var userTotal = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catFood").submit(recommendFood);
    $("#randomCard").submit(drawCard);


	function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the
		// number of button clicks
        clickCounter++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clickCounter);

		// When the count gets to 10, reset it to 0
        if (clickCounter === 10) {
            clickCounter = 0;
        }
	}

    //                 VVV
    function checkAge(event) {
	    // VVV
	    event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var year = parseInt($("#birthYear").val());

        var age = 2020 - year;


        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18) {
            $("#birthYearOutput").text("Child");
        }
        else // If they are 18 or over, print "Adult" instead
        {
            $("#birthYearOutput").text("Adult");
        }
    }

    function calcSalesTax(event) {
        event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var userPurchaseAmount = parseInt($("#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        var userState = $("#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        if (userState === "WI") {
            userTotal = userPurchaseAmount + (0.050 * userPurchaseAmount);
            $("#salesTaxOutput").text(userTotal.toFixed(2) + "$");
        } else if (userState === "IL") {
            userTotal = userPurchaseAmount + (0.080 * userPurchaseAmount);
            $("#salesTaxOutput").text(userTotal.toFixed(2) + "$");
        } else if (userState === "MN") {
            userTotal = userPurchaseAmount + (0.075 * userPurchaseAmount);
            $("#salesTaxOutput").text(userTotal.toFixed(2) + "$");
        } else if (userState === "MI") {
            userTotal = userPurchaseAmount + (0.055 * userPurchaseAmount);
            $("#salesTaxOutput").text(userTotal.toFixed(2) + "$");
        } else { // print "Error" instead
            $("#salesTaxOutput").text("Error");
        }
    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with ID of "catAge"
        var catAge = parseInt($("#catAge").val());


        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (catAge <= 2) {
            $("#catAgeOutput").text("Kitten Chow");
        } else if (catAge > 2 && catAge < 10) {
            $("#catAgeOutput").text("Adult Chow");
        } else {
            $("#catAgeOutput").text("Senior Chow");
        }
        // Print the food recommendation to the <p> with ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue >= 2 && faceValue <= 10) {
            faceValueFinal = faceValue;
        } else if (faceValue === 1) {
            faceValueFinal = "Ace of";
        } else if (faceValue === 11) {
            faceValueFinal = "Jack of"
        } else if (faceValue === 12) {
            faceValueFinal = "Queen of"
        } else if (faceValue === 14) {
            faceValueFinal = "King of"
        }


        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if (suit === 1) {
            suitFinal = "Clubs"
        } else if (suit === 2) {
            suitFinal = "Spades"
        } else if (suit === 3) {
            suitFinal = "Hearts"
        } else if (suit === 4) {
            suitFinal = "diamonds"
        }

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description = faceValueFinal + " " + suitFinal;

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);
    }
});