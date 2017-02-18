var express = require('express');

var eventRouter = express.Router();

var eventsData = [{
            name: 'Event 1',
            description: 'The first event',
            date: '2017.01.01',
            time: '1:00pm',
            duration: '1 hour',
            location: { 
                streetAddr: '101 Main Street',
                city: 'Los Angeles',
                postcode: '87885'
            },
            capacity: '100'
        }, 
            {
            name: 'Event 2',
            description: 'The second event',
            date: '2017.01.08',
            time: '1:00pm',
            duration: '2 hours',
            location: { 
                streetAddr: '89 Bridge Street',
                city: 'San Francisco',
                postcode: '99785'
                },
            capacity: '200'
        }, 
            {
            name: 'Event 3',
            description: 'The third event',
            date: '2017.02.01',
            time: '11:00am',
            duration: '4 hours',
            location: { 
                streetAddr: '25th Street',
                city: 'New York',
                postcode: '80025'
            }, 
            capacity: '400'
        },
            {
            name: 'Event 4',
            description: 'The fourth event',
            date: '2017.02.14',
            time: '7:00pm',
            duration: '2 hours',
            location: { 
                streetAddr: '25th Street',
                city: 'New York',
                postcode: '80025'
            }, 
            capacity: '400'
        } 
    ];

eventRouter.route('/')
    .get(function(req, res) {
        res.render('events', {
        nav: [
             { link :'Services', text: 'Services' }, 
             { link :'Portfolio', text: 'Portfolio' }, 
             { link :'About', text: 'Our events' }, 
             { link :'Team', text: 'Team' }, 
             { link :'Contact', text: 'Contact' },
             { link: 'Events', text: 'Events' }
             ],
        events: eventsData
        });
    });

eventRouter.route('/event')
    .get(function(req, res) {
        res.send('Hello single event');
    });

module.exports = eventRouter;