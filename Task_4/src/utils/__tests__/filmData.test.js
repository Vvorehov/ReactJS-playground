import React from 'react';
import {getFilmInfo, getFilms} from '../filmData';

describe('API', () => {
  const testData = {
    "data": [{
      "id": 412302,
      "title": "Gemini",
      "tagline": "",
      "vote_average": 10,
      "vote_count": 3,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
      "overview": "A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.",
      "budget": 0,
      "revenue": 0,
      "genres": ["Mystery", "Thriller"],
      "runtime": 92
    }], "total": 3000, "offset": 0, "limit": 1
  };

  beforeEach(function () {
    global.fetch = jest.fn().mockImplementation(() => {
      let p = new Promise((resolve, reject) => {
        resolve({
          json: function() {
            return testData
          }
        });
      });

      return p;
    });

  });

  it('getFilms', () => {
    const successMock = jest.fn((data) => data);
    getFilms(successMock);
    setTimeout(()=>{
      console.log(getFilms(successMock));
      expect(successMock).toHaveBeenCalled()
    },1000);
  });

  it('getFilmInfo', () => {
    const successMock = jest.fn((data) => data);
    getFilmInfo(null, successMock);
    setTimeout(()=>{
      console.log(getFilmInfo(successMock));
      expect(successMock).toHaveBeenCalled()
    },1000);
  });
});
