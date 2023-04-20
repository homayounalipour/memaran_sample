import {useCallback} from "react";
import {put, take, takeEvery} from "redux-saga/effects";

import {getCategoriesActions, getCategoriesActionsTypes} from "../product/getCategories";
import {useAppDispatch, useAppSelector} from "../../../hooks/useStore";

export const INIT_APP = 'INIT_APP';
export const initApp = () => ({
    type: INIT_APP
})

export const INIT_APP_COMPLETED = 'INIT_APP_COMPLETED';
export const initAppCompleted = () => ({
    type: INIT_APP_COMPLETED
})

export type InitState = {
    loading: boolean
}

export type InitAction = {
    type: string
}

export const initInitialState = {
    loading: true,
}

export const initReducer = (state: InitState = initInitialState, action: InitAction) => {
    switch (action.type) {
        case INIT_APP:
            return {
                loading: true
            }
        case INIT_APP_COMPLETED:
            return {
                loading: false
            }
        default:
            return state
    }
}

export function* watchInitApp(){
    yield put(getCategoriesActions.load())
    yield take(getCategoriesActionsTypes.loadSuccess)
    yield put(initAppCompleted())
}

export function* initSaga(){
    yield takeEvery(INIT_APP, watchInitApp)
}

export function useInitApp(){
    const init = useAppSelector(state => state.init);
    const dispatch = useAppDispatch();

    const dispatchInitApp = useCallback(()=> {
        dispatch(initApp())
    }, [dispatch])

    return {
        init,
        dispatchInitApp
    }
}
