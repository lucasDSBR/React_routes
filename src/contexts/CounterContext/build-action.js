/* eslint-disable*/
import * as actionTypes from './actions-type';

export const buildActions = (dispatch) => {
    return {
        increate: () => dispatch({ type: actionTypes.INCREASE })
    }
}