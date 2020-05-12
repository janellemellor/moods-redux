import { drinkCoffee, DRINK_COFFEE } from './moodsActions';

//actions needed:
//DRINK_COFFEE
//EAT_SNACK
//TAKE NAP
//STUDY

describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE 
    });
  });  
});
