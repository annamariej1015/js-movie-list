/*
Daily Coding Challenge: Movie List Challenge
1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)
b. Create a function that when called loops through your array and console.logs
the details for each of your movies
c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you search by different titles
files to create: movie-list.html, movie-list.js
*/
// Testing push// -jeff
// Hey guys! Thanks for adding me to the team!
// Sorry for comment

let movies = [
  {
    title: 'Interstellar',
    year: '2014',
    genre: 'science fiction',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imdbRating: '8.6',
  },
  {
    title: 'Padmaavat',
    year: '2018',
    genre: 'drama, history, romance',
    description:
      "Set in medieval Rajasthan, Queen Padmavati is married to a noble king and they live in a prosperous fortress with their subjects until an ambitious Sultan hears of Padmavati's beauty and forms an obsessive love for the Queen of Mewar.",
    imdbRating: '7',
  },
  {
    title: 'Beauty and the Beast',
    year: '1991',
    genre: 'animation, family, fantasy',
    description:
      "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love.",
    imdbRating: '8',
  },
  {
    title: 'Casablanca',
    year: '1942',
    genre: 'drama, war, romance',
    description:
      'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
    imdbRating: '8.5',
  },
  {
    title: 'Wall-E',
    year: '2008',
    genre: 'animation, adventure, family',
    description:
      'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind',
    imdbRating: '8.4',
  },
];

// Loop and find an instance by a parameter//

const titleDetails = (movieTitle) => {

  let foundMovie = movies.find((movie) => {
    return movie.title === movieTitle;
  });
    if (foundMovie) {
    alert(`${foundMovie.title}: ${foundMovie.description}`);
  }else {
    alert(`Movie was not found.`);
  };
};





const newMovie = (title,year,genre,description, imdbRating) =>{
  movies.push({title,year,genre,description,imdbRating})
};

newMovie('Vanilla Sky','A rich bachelor loses all his fam and fortune from an accident and suddenly changes his whole life for better from it',
2001,['Romance', 'Science Fiction'],8.3);
//Create a new movie object

console.log(newMovie);
console.log(movies);
