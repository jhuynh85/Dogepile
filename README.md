# Dogepile

### Overview

**Dogepile** is a database of venues and meetups for your furry friend! Search
through our database to find pet-friendly restaurants, parks, hotels, and meetups
in your area, or add your own favorite location.

### Technologies

Libraries used

* Materialize
* jQuery
* Selenium (ran separately to collect venue data)

APIs

* Google Maps
* Meetup

### Structure

**app.js**
- Driver for functions from other files. Mainly contains event handlers for page elements.

**firebase.js**
- Database-related functions (ie. search and display venues from database, load venues from json file into database)

**map.js**
- Google Maps-related functions (ie. filter venues by distance, get lat/lon of an address, etc.)

**meetup.js**
- Meetup-related functions (ie. search for meetups close to a certain location, display meetups in table/map)