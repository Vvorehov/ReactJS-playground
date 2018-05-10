import React from "react";
import FilmInfo from "../FilmInfo";
import TestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });

const testFilmInfo = {
  "id": 284054,
  "title": "Black Panther",
  "tagline": "Long live the king",
  "vote_average": 7.3,
  "vote_count": 3788,
  "release_date": "2018-02-13",
  "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
  "budget": 200000000,
  "revenue": 1245257672,
  "genres": [
    "Action",
    "Adventure",
    "Fantasy",
    "Science Fiction"
  ],
  "runtime": 134
};

describe('FilmInfo component', () => {
  it('shallow wrapper instance should not be null', () => {
    const wrapper = shallow(<FilmInfo {...testFilmInfo} />);
    const instance = wrapper.instance();

    expect(instance).not.toBe(null);
  });
});

describe('FilmInfo layout complete', () => {
    beforeEach(function() {

        global.fetch = jest.fn().mockImplementation(() => {
            let p = new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    Id: '284054',
                    json: function() {
                        return {Id: '284054'}
                    }
                });
            });

            return p;
        });

    });

    it('Render correct', () => {

        const component = TestRenderer.create(
            <FilmInfo {...testFilmInfo} />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

