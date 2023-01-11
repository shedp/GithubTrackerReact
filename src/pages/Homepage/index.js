import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SearchForm from '../../components/SearchForm';
import Result from '../../components/Result';
import {getResult} from '../../actions';

const Search = () => {
    const result = useSelector(state => state.result)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch();

    
    
    const renderResult = () => {
        return loading ? <p>Loading...</p> : <Result result={result}/>
    }

    const search = searchTerm => dispatch(getResult(searchTerm))

    return(
        <>
            <SearchForm getResult={search}/>
            <div className='results'>
            {error ? <p role="alert"> Oops {error}</p> : renderResult()}
            </div>
        </>
    )
};

export default Search;