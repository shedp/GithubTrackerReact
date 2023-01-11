import React from "react";
import { useSelector } from "react-redux";

const Repo = ({id}) => {
    const repo = useSelector(state => state.result.find(r => r.id == id ))
    console.log(repo)
    return ( 
        <div className="repo-info">
            {repo && <h1>{repo.name}</h1>}
            {repo && <p>Stargazers {repo.stargazers_count}</p>}
            {repo && <p>Forks {repo.forks_count}</p>}
            {repo && <p>Issues {repo.open_issues_count}</p>}
        </div>
     );
}
 
export default Repo;