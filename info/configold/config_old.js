var config = {
    style: 'mapbox://styles/dmcnamara219/cl23eta57000715t7ux26loqj',
    accessToken: 'pk.eyJ1IjoiZG1jbmFtYXJhMjE5IiwiYSI6ImNsMjNheGliZzE0OGUzam54aXNjeTYyMjIifQ.8fc7rEcK73MrUwaDAPZLsA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Carceral Keynesianism',
    subtitle: 'Spatializing Prison Construction as Rural Development Policy in Mario Cuomo’s New York State',
    byline: 'By Jonathan Marty, David McNamara, and Erik Strand',
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
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'chapter 1',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
               // {
                 //    layer: 'newyork-regions',
                   //  opacity: 1,
                     //duration: 5000
               //  }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'chapter 2',
            image: '',
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
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'manufacturing-employment',
                    opacity: 0,
                    duration: 5000
                }
            ]
        }
    ]
};


