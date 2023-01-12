import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Repo = ({id}) => {
    const repo = useSelector(state => state.result.find(r => r.id == id ))
    console.log(repo)
    return ( 
        <div className="repo-info">
            {repo && <a href={repo.html_url}><h1>{repo.name}</h1></a>}
            <br/>
            {repo.description && <p>Description: {repo.description}</p>}
            <br/>
            {repo && <div className="repo-item"><img src="./images/repo-star.svg" alt="" /> <p>Stars:  {repo.stargazers_count}</p></div>}
            {repo && <div className="repo-item"><img src="./images/repo-fork.svg" alt="" /><p>Forks:  {repo.forks_count}</p></div>}
            {repo && <div className="repo-item"><img src="./images/repo-issue.svg" alt="" /> <p>Issues: {repo.open_issues_count}</p></div>}
            {repo && <div className="repo-item"><img src="./images/repo-watcher.svg" alt="" /> <p>Watchers: {repo.watchers_count}</p></div>}
            <br/>
            {repo && <p>Created: {dayjs(repo.created_at).format("DD/MM/YYYY")}</p>}
            {repo && <p>Last Updated: {dayjs(repo.updated_at).format("DD/MM/YYYY")}</p>}

        </div>
     );
}
 
export default Repo;
