'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        {
            title: 'Interactive Graphics with dc.js & d3.js',
            decks: ['github.com/smckissock/dc-samples', 'scottmckissock@gmail.com'],
            cls: 'lightsalmon',
            //cap: 'Hello! Today we are talking about ccrossfilter, dc, and interactive graphics.'
        },

        //{
        //    imgUrl: 'capture.png',
        //    cap: 'Here\'s a map we made using d3, leaflet.js, and Mapbox. We will be talking through the key portions of the code, so you can create something like it.'
        //},

        {
            title: 'Plan',
            decks: [
                '1. Examples',
                '2. d3',
                '3. Crossfilter',
                '4. dc.js basics',
                '5. dc.js applications',
                '6. Resources'
            ],
        },

        {
            title: 'Examples',
            decks: [
                'https://dc-js.github.io/dc.js/',
                'http://smckissock.github.io/dc-samples/foreign-assistance/index.html'
            ],
        },

        {
            title: 'D3 - Data Driven Documents',
            decks: [
                'd3js.org',
                'Creates HTML or SVG DOM elements from data',
                'Low level graphics - not a charting library',
                'Inspired by Grammar of Graphics, by Leland Wilkinson (like ggplot2)',
                'Smooth transitions as data changes',
                'Steep learning curve?'
            ],
        },

        {
            title: 'Crossfilter',
            decks: [
                'http://square.github.io/crossfilter/',
                'Mike Bostock created for Square',
                'In broswer filtering and aggregation for javacript',
                'Consumes JSON, CSV',
                'Single "table" - do any joins on backend'
            ],
        },

        {
            title: 'Crossfilter',
            decks: [
                '"Dimensions" are defined on text, dates or numeric ranges',
                'Crossfilter builds indexes on each dimension for fast filtering',
                'After that, underlying data is not used'
            ],
        },

        {
            title: 'Crossfilter',
            decks: [
                '"Groups" are made of dimensions and calculated values',
                'Could be as simple as a count, or the sum of a single column',
                'Or complex reductions (Nasdaq on dc home page)',
            ],
        },

         {
             title: 'Crossfilter',
             decks: [
                 'In dimensional database terms:',
                 '',
                 'Dimension = Dimension Attribute',
                 'Group = Dimension Attribute + Measure'
             ],
         },

        {
            title: 'dc - Dimensional Charting',
            decks: [
                'By Nick Qi Zhu - directly inspired by cross filter homepage',
                '"Coordinated Visualizations"',
                'Multiple charts tied to a single crossfilter',
            ],
        },

         {
             title: 'dc - Dimensional Charting',
             decks: [
                 'Charts typically take a dimension and a group',
                 '"Coordinated Visualizations"',
                 'Or complex reductions (Nasdaq on dc home page)',
             ],
         },

        


        {
            title: 'Planned Foreign Assistance',
            decks: [
                'github.com/smckissock/dc-samples',
                'Get code - Download Zip',
            ],
        },


        //{ imgUrl: 'code-00.png' },
        //{ imgUrl: 'code-00-console.png' },
        //{ imgUrl: 'code-01.png' },
        //{ imgUrl: 'code-02.png' },
        //{ imgUrl: 'code-03.png' },
        //{ imgUrl: 'code-03-console.png' },
        //{ imgUrl: 'code-04.png' },
        //{ imgUrl: 'code-04-console.png' },
        //{ imgUrl: 'code-05.png' },
        //{ imgUrl: 'code-06.png' },
        //{ imgUrl: 'code-07.png' },
        //{ imgUrl: 'code-08.png' },
        
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
