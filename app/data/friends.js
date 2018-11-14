// ===============================================================================
// DATA
// List of friends already in array
// ===============================================================================

var friends= [
    {
        name: "Louis",
        photo: "https://www.learnjazzstandards.com/wp-content/uploads/2015/09/LouisArmstrong3.jpg",
        scores: [
            5,
            2,
            3,
            2,
            2,
            2,
            3,
            3,
            3,
            2,
        ]
    },
    {
        name: "Queen",
        photo: "http://factmag-images.s3.amazonaws.com/wp-content/uploads/2014/09/Queen190914.jpg",
        scores: [
            3,
            3,
            5,
            3,
            5,
            4,
            5,
            2,
            5,
            4,
        ]
    },
    {
        name: "Marshmello",
        photo: "https://images-na.ssl-images-amazon.com/images/I/61tuj9GDbjL.png",
        scores: [
            2,
            5,
            4,
            5,
            3,
            2,
            3,
            5,
            3,
            4,
        ]
    },
    {
        name: "Foo Fighters",
        photo: "https://i.axs.com/2016/01/promoted-media-optimized_568ae51bef386.jpg",
        scores: [
            2,
            2,
            3,
            3,
            5,
            5,
            3,
            2,
            5,
            5,
        ]
    },
    {
        name: "Usher",
        photo: "http://www.jedecore.com/wallpaper/chanteur/usher.jpg",
        scores: [
            2,
            5,
            3,
            4,
            3,
            2,
            3,
            4,
            3,
            4,
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
