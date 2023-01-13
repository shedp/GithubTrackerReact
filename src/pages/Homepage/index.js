import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SearchForm from '../../components/SearchForm';
import Result from '../../components/Result';
import {getResult} from '../../actions';
import Avatar from "../../components/Avatar"
import Placeholder from '../../components/Placeholder';
import PlaceholderAvatar from '../../components/PlaceholderAvatar'
import ErrorPlaceholder from '../../components/ErrorPlaceholder';

const Search = () => {
    const result = useSelector(state => state.profile)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch();

    
    
    const renderResult = () => {
        return loading ? <p className='loading'>Loading...</p> : <Result result={result}/>
    }

    const renderAvatar = () => {
        return loading ? <p>...</p> : <Avatar result={result}/>
    }

    const search = searchTerm => dispatch(getResult(searchTerm))
    
    return(
        <>
            <SearchForm getResult={search} />
            {!result && !error ? <PlaceholderAvatar/> :  error ? <PlaceholderAvatar/> : renderAvatar()}
            <div className="background"></div>
            <div className='results'>
            {!result && !error ? <Placeholder/> :  error ? <ErrorPlaceholder message={error.message}/> : renderResult()}
           
            </div>
        </>
    )
};

export default Search;
