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
                '4. dc.js demo & code',
                '5. Resources'
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
            title: 'Crossfilter - origins',
            decks: [
                'http://square.github.io/crossfilter/',
                'Mike Bostock created for Square',
                'In broswer filtering and aggregation for javascript',
                'Consumes JSON, CSV',
                'Single "table" - do any joins on backend'
            ],
        },

        {
            title: 'Crossfilter - dimensions',
            decks: [
                '"Dimensions" are defined on text, dates or numeric ranges',
                'Crossfilter builds indexes on each dimension for fast filtering',
                'After that, underlying data is not used',
                'These are be the labels on a pie or bar chart'
            ],
        },

        {
            title: 'Crossfilter - groups',
            decks: [
                '"Groups" are made of dimensions and calculated values',
                'Could be as simple as a count, or the sum of a single column',
                'Or complex reductions (Nasdaq on dc home page)',
                'These are the sizes of the pie slices or bars'
            ],
        },

        {
            title: 'Crossfilter - filters',
            decks: [
                '"Filters" limit the records in crossfilter to single values or ranges in a dimension',
                'As items move in and out of crossfilter, group values for dimensions change',
                'Filters are set by clicking on particular items in graphs',
            ],
        },

         {
             title: 'Crossfilter - olap?',
             decks: [
                 'In dimensional database terms:',
                 '',
                 'Dimension = Dimension Attribute',
                 'Group = Dimension Attribute + Measure'
             ],
         },

        {
            title: 'dc - origins',
            decks: [
                'By Nick Qi Zhu - directly inspired by cross filter homepage',
                '"Coordinated Visualizations"',
                'Multiple charts tied to a single crossfilter',
            ],
        },

         {
             title: 'dc - chart types',
             decks: [
                 'Charts typically take a dimension and a group',
                 'Chart types: bar, pie, scatter, bubble, table, grid, choropleth, heatmap, single number, etc',
             ],
         },


        {
            title: 'Planned Foreign Assistance',
            decks: [
                'http://smckissock.github.io/dc-samples/foreign-assistance/',
                'In what year did Department of Defense spend the most money?',
                'What country has the highest spending for malaria? (filter Sector)',
                'Which agencies do not break out plans by operating unit?',
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
            title: 'dc.js - issues',
            decks: [
                'Too much data - 100k +',
                'Too many svg elements',
                'Commit to d3 for full benefit',
                'Bandwidth - tamper.js?'
            ],
        },

        {
            title: 'dc.js - future',
            decks: [
                'Done - basic features are there',
                'Used in a lot of internal apps',
                'Version 2.0 to be released soon',
                '2.x - more chart types: small multiples, tree maps',
                'Pluggable data layer (use something besides crossfilter)'
            ],
        },

         {
             title: 'dc.js - missing pieces',
             decks: [
                 'Layout - on your own: Bootstrap, Gridster, d3, etc',
                 'Pin maps - prabobly never included',
                 'Charts with standard defaults',
                 'Need a way to show current filters'
             ],
         },

          {
              title: 'dc.js - alternatives',
              decks: [
                  'Chiasm?',
                  'https://github.com/chiasm-project/chiasm'
                  ],
          },

        {
            title: 'Getting started',
            decks: [
                'Crossfilter Tutorial',
                'http://blog.rusty.io/2012/09/17/crossfilter-tutorial',
                'd3 book with dc chapter:', 
                'https://leanpub.com/D3-Tips-and-Tricks',
                'Tutorial with Leaflet',
                'https://github.com/austinlyons/dcjs-leaflet-untappd'
            ],
        },
    ];

    return slides;
}])
;
