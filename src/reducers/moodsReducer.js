import { DRINK_COFFEE } from '../actions/moodsActions';

export default function reducer(
  state = {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  }, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state,
        coffees: state.coffees + 1 };  
    default:
      return state;
  }
}
