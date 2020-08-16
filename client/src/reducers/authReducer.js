import { FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR, FETCH_AUTH_REQUEST } from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
  loggedIn: false,
  token: null,
  loading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AUTH_REQUEST: {
      return getNewState(state, {
        loading: true,
      });
    }
    case FETCH_AUTH_SUCCESS: {
      const { payload: loggedIn } = action;
      return getNewState(state, {
        loggedIn,
      });
    }
    case FETCH_AUTH_ERROR: {
      return getNewState(state, {
        loggedIn: false,
        token: null,
        loading: false,
      });
    }
    default:
      return state;
  }
}
