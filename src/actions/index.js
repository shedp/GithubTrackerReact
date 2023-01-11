import axios from 'axios';
import {useEffect, useState} from 'react';

export const loading = (username) => {
    return {
        type: "LOADING",
        payload: username
    }
}

export const loadResult = (result) => {
    return {
        type: "LOAD_RESULT",
        payload: result
    }
}

export const getResult = (searchTerm) => {
	return async (dispatch) => {
		dispatch(loading(searchTerm))
		try {
			const response = await axios.get(
				`https://api.github.com/users/${searchTerm}/repos`
			)
			console.log(response)
			if (response.data.length != 0) {
				dispatch(loadResult(response.data))
			} else {
				throw new Error('User has no repositories')
			}
			
		} catch (err) {
			console.error(err)
			dispatch({
                type: "SET_ERROR",
                payload: err
            })
		}
	}
}

export const loadAvatar = (result) => {
    return {
        type: "LOAD_AVATAR",
        payload: result
    }
}

export const getAvatar = (searchTerm) => {
	return async (dispatch) => {
		dispatch(loading(searchTerm))
		try {
			const { data } = await axios.get(
				`https://api.github.com/users/${searchTerm}`
			)
			dispatch(loadAvatar(data.avatar_url))
		} catch (err) {
			console.error(err)
			dispatch({
                type: "SET_ERROR",
                payload: err
            })
		}
	}
}