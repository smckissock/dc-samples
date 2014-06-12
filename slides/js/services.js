'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        {
            title: 'Interactive Graphics with dc.js',
            decks: ['github.com/smckissock/dc-samples', 'scottmckissock@gmail.com'],
            cls: 'lightsalmon',
            cap: 'Hello! Today we are talking about ccrossfilter, dc, and interactive graphics.'
        },

        {
            imgUrl: 'capture.png',
            cap: 'Here\'s a map we made using d3, leaflet.js, and Mapbox. We will be talking through the key portions of the code, so you can create something like it.'
        },

        {
            title: 'Plans',
            decks: [
                '1. What is this good for',
                '2. Crossfilter',
                '3. Make the graphics'
            ],
            cap: 'Here\'s the outline for our talk tonight.'
        },
    ];

    return slides;
}])
;
