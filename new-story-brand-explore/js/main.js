// makes exit x work

function exitOverlayNewStory(){
    const exitButtonNewStory = document.getElementById("exit-new-story-overlay");
    const exitNewStoryOverLay = document.getElementById("new-story-overlay-for-october");
    exitButtonNewStory.onclick = function() {
        exitNewStoryOverLay.style.display = "none";
    };
};

exitOverlayNewStory();