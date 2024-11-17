// LIST OF IMAGES
var imgsList = ["bandage", "button", "car-tire", "clothes-pin", "computer-mouse", "fork", "hair-pin", "handcuffs", "key", "ladder", "matchbox", "paper-clip", "protractor", "saucepan", "saw", "shoe", "spoon", "tennis-ball", "toilet-paper", "wood-plank"];
var imgsLen = imgsList.length;

// START TEST
$("#start-btn").click(() => {
    window.location.href='test.html';
 });

// GENERATE A RANDOM IMAGE
var currImgIndex = Math.floor(Math.random() * imgsLen);
var currFileName = imgsList[currImgIndex];

var words = currFileName.split("-");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
var currImgName = words.join(" ");

$("#img").attr("src", `./images/${currFileName}.png`);
$("#img-name").text(currImgName);
$("#img-name-span").text(currImgName);

// TAKE INPUT FROM PARTICIPANT
var inputsList = [];
var submit = () => {
    var input = $("#aut-input").val();
    if (input.trim() != "") inputsList.push(input);
    $("#aut-input").val("");
};
$("#aut-input").on("keydown", (e) => {
    if (e.which == 13) submit(); // 13 refers to enter button
});

// DISPLAY RESULTS
var displayResults = (inputsList) => {
    for (var i = 0; i < inputsList.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerText = inputsList[i];
        listItem.classList.add("list-group-item");
        $("#results-list").append(listItem);
    }
};

// HANDLE COUNTDOWN
var seconds = 119; // since original HTML text is 120, it gets counted twice if seconds initialised as 120
var timer = setInterval(() => {
    if (seconds <= 15) {
        $("#countdown").css("color", "red");
    }
    if(seconds <= 0) { // after time run out
        clearInterval(timer);
        
        $("#aut-input").prop('disabled', true);

        $("#test-container").prop('hidden', true);
        $("#results-container").prop('hidden', false);

        displayResults(inputsList);
    }
    $("#countdown").text(seconds);
    seconds -= 1;
}, 1000);
