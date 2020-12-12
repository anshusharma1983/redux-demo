import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
