const mongoose = require('mongoose')
const Campground = require("../models/campgrounds")
const cities = require("./cities")
const {places,descriptors} = require("./seedHelpers")

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error"));
db.once("open",()=>{
    console.log("Database connected")
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async()=>{
    await Campground.deleteMany({});
    for(let i=0;i<=50;i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const campgroundPrice = Math.floor(Math.random() * 20) + 1;
        const camp = new Campground({
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            author:'6ab16460f7bf3b9a407cd276',
            price:campgroundPrice,
            title:`${sample(descriptors)} ${sample(places)}`,
            images:[
                {
                    url:'https://res.cloudinary.com/dy6rh1rwa/image/upload/v1648539760/YelpCamp/kvkghhcy0yqlypl6q72d.jpg',
                    filename:'YelpCamp/kvkghhcy0yqlypl6q72d'
                },
                {
                    url:'https://res.cloudinary.com/dy6rh1rwa/image/upload/v1648539760/YelpCamp/kvkghhcy0yqlypl6q72d.jpg',
                    filename:'YelpCamp/kvkghhcy0yqlypl6q72d'
                }
            ],
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        })
        await camp.save();
    }
}



seedDB().then(()=>{
    mongoose.connection.close();
})