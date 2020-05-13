import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK } from './moodsActions';

//actions needed:
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
  

  it('creates an eat snack action', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

});
