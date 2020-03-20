import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IState {
    count: number;
}

const initialState: IState = { count: 0 }

const reducer = (state: IState = initialState, action: any): IState => {
    if (action.type === `INCREMENT`) {
        return Object.assign({}, state, {
            count: state.count + 1,
        })
    }
    return state
}

// preloadedState will be passed in by the plugin
export default (preloadedState: any) => {
    return createStore(reducer as any, composeWithDevTools(applyMiddleware(thunk)));
};