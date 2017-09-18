function addNewStoryBanner() {
    const newStoryBanner = 
    '<div class="new-story-overlay-wrapper">' +
    '<div class="overlay-container-new-story">' +

      '<img class="image-new-story-october" sizes="(max-width: 479px) 91vw, 305px" src="images/overlay-image.png" srcset="images/overlay-image-p-500.png 500w,' + 
      'images/overlay-image-p-800.png 800w, ' + 'images/overlay-image-p-1080.png 1080w, ' + 'images/overlay-image-p-1600.png 1600w, ' + 
      'images/overlay-image.png 1796w" width="305">' +

      '<h1 class="new-story-h1-overlay">' +
        '<span class="new-story-text-span">End Survival Mode</span>' +
      '</h1>' +
      '<div class="new-story-overlay-small-text">' +
        '<em>World Housing Day - October 2</em>' +
      '</div>' +
      '<h4 class="new-story-h4-overlay">We\'re joining New Story today, on World Housing Day, to help build a home for a family living in survival mode. 100% of all donations directly hire local workers and buy local materials. Join us to #EndSurvivalMode.</h4>' +
      '<a class="new-story-overlay-button w-button-new-story" href="http://newstorycharity.org" target="_blank" rel="noopener noreferrer">Visit newstorycharity.org</a>' +
    '</div>' +
    '<div id="exit-new-story-overlay" class="new-story-close-overlay" data-ix="close-overlay-large">x</div>' +
  '</div>';

    var bannerLocation = document.getElementById('new-story-overlay-for-october');
    bannerLocation.innerHTML = newStoryBanner;
}

// makes exit x work
function exitOverlayNewStory(){
    const exitButtonNewStory = document.getElementById("exit-new-story-overlay");
    const exitNewStoryOverLay = document.getElementById("new-story-overlay-for-october"); 
    exitButtonNewStory.onclick = function() {
        exitNewStoryOverLay.style.display = "none";
    };
};

addNewStoryBanner();
exitOverlayNewStory();