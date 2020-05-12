import { drinkCoffee } from '../actions/moodsActions';
import reducer from './moodsReducer';

describe('moods reducer', () => {
  it('handles the drink coffee action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = drinkCoffee();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
});
