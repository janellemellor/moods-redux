import { drinkCoffee, eatSnack, takeNap } from '../actions/moodsActions';
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
  

  it('handles the eat snack action', () => {
    const state = {
      coffees: 1,
      snacks: 2,
      naps: 0,
      studies: 0
    };
    const action = eatSnack();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      coffees: 1,
      snacks: 3,
      naps: 0,
      studies: 0
    });
  });


  it('handles the take nap action', () => {
    const state = {
      coffees: 1,
      snacks: 2,
      naps: 3,
      studies: 0 
    };
    const action = takeNap();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      coffees: 1,
      snacks: 2,
      naps: 4,
      studies: 0
    });
  });

});
