var table = {
    "One":".ColumnOne",
    "Two":".ColumnTwo",
    "Three":".ColumnThree",
    "Four":".ColumnFour",
    "Five":".ColumnFive",
    "Six":".ColumnSix",
    "Seven":".ColumnSeven",
    "Eight":".ColumnEight",
    "Nine":".ColumnNine",
    "Ten":".ColumnTen",
    "Eleven":".ColumnEleven",
    "Twelve": ".ColumnTwelve",
    "Thirteen": ".ColumnThirteen",
    "Fourteen": ".ColumnFourteen",
    "Fifteen": ".ColumnFifteen",
    "Empty": ".Empty"
};

var firstSelect = ".ColumnOne";
var secondSelect = ".Empty";
var cellText1 = [];
var cellText2 = [];
var start;

window.onload = function() {
    for(var i in table){
        if(table[i] != firstSelect && table[i] != secondSelect){
            $(table[i]).hide();
        }
    }
};

