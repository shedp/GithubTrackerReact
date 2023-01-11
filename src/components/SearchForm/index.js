import React, {useState} from "react";

const SearchForm = ({getResult}) => {
    const [username, setUsername] = useState("");

    const updateInput = (e) => {
        const input = e.target.value
        setUsername(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getResult(username)
        setUsername("")
    }

    return(
        <form onSubmit={handleSubmit} aria-label="search">
            <label htmlFor="username">Search username:</label>
            <input type="text" id="username" name="username" value={username} onChange={updateInput} placeholder="Search..."/>
            <div className='search-svg'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="mr-1 header-search-key-slash">
                <path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path>
                <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
            </svg></div>
            <input type="submit" value="search"/>
        </form>
    );
}
export default SearchForm;