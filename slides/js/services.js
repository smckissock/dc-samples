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
            title: 'Plans',
            decks: [
                '1. What is this good for',
                '2. Examples',
                '2. Crossfilter',
                '3. Make a chart'
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
                'In broswer database',
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
                'Easy to use, extensible (with effort)',
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

        { imgUrl: 'get-data.png' },
        { imgUrl: 'total-group.png' },
        { imgUrl: 'number-display.png' },
        { imgUrl: 'pie-chart.png' },

        {
            title: 'dc.js Issues',
            decks: [
                'Too much data - 100k +',
                'Too many svg elements',
                'Commit to d3 for full benefit'
            ],
        },
    ];

    return slides;
}])
;
