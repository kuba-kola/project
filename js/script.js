"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat : false
};

const a = prompt ('Один из последний просмотренных фильмов?', ""),
      b = prompt ('На сколько оценице его?', ""),
      c = prompt ('Один из последний просмотренных фильмов?', ""),
      d = prompt ('На сколько оценице его?', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);