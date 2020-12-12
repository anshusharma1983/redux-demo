import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));

store.dispatch(bugResolved(1));

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
