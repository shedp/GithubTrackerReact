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
            <input type="submit" value="search"/>
        </form>
    );
}
export default SearchForm;