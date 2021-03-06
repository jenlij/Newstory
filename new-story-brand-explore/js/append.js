function addBanner() {
    var banner = 
        '<div class="medium overlay-wrapper">' + 
            '<div class="medium overlay-container">' +
                '<h1 class="h1-overlay">' +
                    '<span class="text-span">End Survival Mode</span>' +
                '</h1>' +
                '<div class="overlay-small-text">' +
                    '<em>World Housing Day - October 2</em>' +
                '</div>' +
                '<h4 class="h4-overlay">' +
                    'We\'re joining New Story today, on World Housing Day, to help build a home for a family living in survival mode. 100% of all donations directly hire local workers and buy local materials. Join us to #EndSurvivalMode.' +
                '</h4>' + 
                '<a class="overlay-button w-button" href="http://newstorycharity.org" target="_blank">Visit newstorycharity.org</a>' +
                '<div class="close-overlay medium" data-ix="close-overlay-large">x</div>' +
            '</div>' +
        '</div>';
    var bannerLocation = document.getElementById('new-story-body');
    bannerLocation.innerHTML = banner;
}
addBanner();
