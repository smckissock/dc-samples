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

        //{
        //    imgUrl: 'capture.png',
        //    cap: 'Here\'s a map we made using d3, leaflet.js, and Mapbox. We will be talking through the key portions of the code, so you can create something like it.'
        //},

        {
            title: 'Plan',
            decks: [
                '1. Examples',
                '2. What is dc.js good for?',
                '3. d3.js',
                '4. Crossfilter',
                '5. Make a dc chart'
            ],
            cap: 'Here\'s the outline for our talk tonight.'
        },

        {
            title: 'D3 - Data Driven Documents',
            decks: [
                'd3js.org',
                'Creates HTML or SVG DOM elements from data',
                'Low level graphics - not a charting library',
                'Powerfull, full featured - but steep learning curve'
            ],
        },

        {
            title: 'Crossfilter', 
            decks: [
                'http://square.github.io/crossfilter/',
                'In broswer slicing and dicing for javacript arrays',
                'Consumes JSON, CSV',
                'Filters, groups, reduces - no joins!'
            ],
        },

        {
            title: 'DC - Dimensional Charting',
            decks: [
                'http://dc-js.github.io/dc.js/',
                'Build on crossfilter and d3',
                'Many chart types',
                'Easy to use, extensible (with some effort)',
                'Many examples'
            ],
        },

        {
            title: 'Pak Info Examples',
            decks: [
                'Use "FACTS Info" reports with csv output',
                'User Activity',
                'Funding Status',
            ],
        },

        {
            title: 'Planned Foreign Assistance',
            decks: [
                'github.com/smckissock/dc-samples',
                'Get code - Download Zip',
            ],
        },


        { imgUrl: 'code-00.png' },
        { imgUrl: 'code-00-console.png' },
        { imgUrl: 'code-01.png' },
        { imgUrl: 'code-02.png' },
        { imgUrl: 'code-03.png' },
        { imgUrl: 'code-03-console.png' },
        { imgUrl: 'code-04.png' },
        { imgUrl: 'code-04-console.png' },
        { imgUrl: 'code-05.png' },
        { imgUrl: 'code-06.png' },
        { imgUrl: 'code-07.png' },
        { imgUrl: 'code-08.png' },
        
        {
            title: 'Questions',
            decks: [
                'In what year did Department of Defense spend the most money?',
                'What country has the highest spending for malaria? (Filter to Health Category)',
                'Which agencies do not break out plans by operating unit?',
            ],
        },

        {
            title: 'dc.js Issues',
            decks: [
                'Too much data - 100k +',
                'Too many svg elements',
                'Commit to d3 for full benefit'
            ],
        },

        {
              title: 'dc.js Future',
              decks: [
                  'Done - basic features are there',
                  'Used in a lot of internal apps',
                  'Version 2.0 to be released mid July',
                  '2.x - more chart types: small multiples, tree maps',
                  'Pluggable data layer (use something besides crossfilter)'
              ],
          },
    ];

    return slides;
}])
;
