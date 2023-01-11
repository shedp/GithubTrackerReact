import React from "react";
import { useSelector } from "react-redux";

const Repo = ({id}) => {
    const repo = useSelector(state => state.result.find(r => r.id == id ))
    console.log(repo)
    return ( 
        <>
            {repo && <h1>{repo.name}</h1>}
            {repo && <p>{repo.stargazers_count}</p>}
            {repo && <p>{repo.forks_count}</p>}
            {repo && <p>{repo.open_issues_count}</p>}
        </>
     );
}
 
export default Repo;