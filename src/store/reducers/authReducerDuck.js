import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const SET_AUTH = 'authReducer/SET_AUTH';
const SET_USER = 'authReducer/SET_USER';

// Default State
const defaultState = {
	user: null,
	isAuth: false
}

// Reducer
export default function authReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case SET_AUTH: {
			return { ...state, isAuth: payload }
		}
		case SET_USER: {
			return { ...state, user: payload }
		}
		default: return state;
	}
}

// Action Creators
export const setAuth = Synchronous(SET_AUTH)
export const setUser = Asynchronous(SET_USER)
