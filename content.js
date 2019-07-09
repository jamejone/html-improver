var counter = 0;

var blockPaywall = function() {
    var storyBody = document.getElementsByClassName('js-pre-chunks__story-body');
    if (storyBody.length == 1) {
        storyBody[0].removeAttribute("style");
    }
    
    if (counter < 10) {
        counter++;
        setTimeout(blockPaywall, 3000);
    }
}

blockPaywall();