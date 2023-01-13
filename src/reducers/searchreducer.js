const initState = {
    username: "",
    profile: "",
    repos: [],
    loading: false
};

const searchReducer = (state=initState, action) => {
    switch (action.type) {
            case "LOADING":
                return {
                    ...state,
                    username: action.payload,
                    loading: true
                };
            case "LOAD_PROFILE":
                return {
                    ...state,
                    profile: action.payload,
                    repos: [],
                    loading: false,
                    error: false
                };
            case "LOAD_REPOS":
                return {
                    ...state,
                    repos: action.payload,
                    loading: false,
                    error: false,
                }
            case "SET_ERROR":
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
                };
            default:
                return state;
    }
}

export default searchReducer;