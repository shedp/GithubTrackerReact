import axios from 'axios';
import {useEffect, useState} from 'react';

export const loading = (username) => {
    return {
        type: "LOADING",
        payload: username
    }
}

export const loadProfile = (profile) => {
	return {
		type: "LOAD_PROFILE",
		payload: profile
	}
}

export const loadRepos = (repos) => {
    return {
        type: "LOAD_REPOS",
        payload: repos
    }
}

export const getResult = (searchTerm) => {
	return async (dispatch) => {
		dispatch(loading(searchTerm))
		try {
			const response = await axios.get(
				`https://api.github.com/users/${searchTerm}`
			)
			dispatch(loadProfile(response.data))
			if (response.data.public_repos != 0) {
				const response = await axios.get(
					`https://api.github.com/users/${searchTerm}/repos`
				)
				dispatch(loadRepos(response.data))
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