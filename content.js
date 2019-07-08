
var blockPaywall = function() {
    var storyBody = document.getElementsByClassName('js-pre-chunks__story-body');
    if (storyBody.length == 1) {
        //storyBody[0].style.visibility = "visible";

        console.log("FOUND!");
        storyBody[0].removeAttribute("style");
    }
    
    setTimeout(blockPaywall, 4000);
}

blockPaywall();