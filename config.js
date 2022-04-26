'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

/*
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-75.5446, 42.8270],
    zoom: 6
});

var newyork_regions = './data_from_arcmap/newyork_regions.geojson'
var cuomo_prisons = './data_from_arcmap/cuomo_prisons.geojson'

map.on('load',function(){
    // define a 'source' for your polygons dataset
    map.addSource('cuomo_prisons',{
        'type':'geojson',
        'data': cuomo_prisons
    });
    map.addlayer({
        'id': 'cuomo prisons',
        'type':'circle',
        'source':'cuomo_prisons',
        'paint':{
            'circle-color':'#349f27',
            'circle-opacity':1,
            'circle-radius':10
        }
    }) 
    map.addSource('newyork_regions',{
        'type':'geojson',
        'data': newyork_regions,
      });
      // add a new layer with your polygons
    map.addLayer({
        'id':'newyork regions',
        'type':'fill',
        'source':'newyork_regions',
        'paint':{
          'fill-color':'#ffffff',
          'fill-outline-color':'#000000',
          'fill-opacity': 1
        }
    })
  }); */

  var config = {
    style: 'mapbox://styles/dmcnamara219/cl23eta57000715t7ux26loqj',
    accessToken: 'pk.eyJ1IjoiZG1jbmFtYXJhMjE5IiwiYSI6ImNsMjNheGliZzE0OGUzam54aXNjeTYyMjIifQ.8fc7rEcK73MrUwaDAPZLsA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Carceral Kaynesianism: Spatializing Prison Construction as Rural Development Policy in Mario Cuomo’s New York State',
    subtitle: 'By Jonathan Marty, David McNamara, and Erik Strand',
    byline: `During his three-term tenure as Governor of New York State from 1983 to 1994, Mario Cuomo ascended to icon status in liberal political circles. With his talent for public speaking, coupled with his vision of “progressive pragmatism” reminiscent of beloved reformers like Franklin D. Roosevelt and Fiorello LaGuardia, Cuomo proved highly endearing to a Democratic Party increasingly crushed and alienated by the small government, free market rhetoric of the Reagan administration in Washington. 
    Aside from his early stance against the death penalty, Cuomo is perhaps most remembered today for his Keynote Address at the 1984 Democratic National Convention. Speaking in San Francisco to a crowd of DNC members, Cuomo powerfully argued on behalf of those Americans who, due to poverty, deindustrialization and outsourcing of jobs, as well as newly enacted fiscal austerity measures from the White House, struggled to live with dignity. With its populist righteousness and optimistic outlook toward the capacity of government to improve people’s lives, this speech enshrined Cuomo as the Democrats’ “great progressive hope,” and forever associated him with a lasting image of American inequality as a “tale of two cities.”
    `,
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'chapter 1',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-75.5446, 42.8270],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prison-employment',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0,
                    duration: 1000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'newyork-regions',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prison-employment',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0,
                    duration: 1000,
                }
            ]
            },
            {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'chapter 2',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.5446, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 1,
                    duration: 1000,
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 1,
                    duration: 1000,
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 1,
                    duration: 1000,
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 1,
                    duration: 1000,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'chapter 3',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.5446, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [



                {
                    layer: 'manufacturing-employment',
                    opacity: 0,
                    duration: 1000,
                },
                {
                    layer: 'prison-employment',
                    opacity: 1,
                    duration: 1000,
                }
            ],
            onChapterExit: []
        }
        /*{
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'chapter 2',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-75.5446, 42.8270],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newyork-regions',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'prison-employment',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'newyork-regions',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'cuomo-prisons',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'non-cuomo-prisons',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'manufacturing-employment',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'prison-employment',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'prisoner-flows',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'prisoner-flows-nyc',
                    opacity: 0,
                    duration: 1000
                }
            ]
        }*/
    ]
};
  