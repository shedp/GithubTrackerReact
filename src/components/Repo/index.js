import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Repo = ({id}) => {
    const repo = useSelector(state => state.repos.find(r => r.id == id ))
    
    return ( 
        <div className="repo-info">
            {repo && <div>
                <a href={repo.html_url}><h1>{repo.name}</h1></a>
                <br/>
                {repo.description && <p>Description: {repo.description}</p>}
                <br/>
                <div className="repo-item">
                    <img src="./images/repo-star.svg" alt="" /> 
                    <p>Stars:  {repo.stargazers_count}</p>
                </div>
                <div className="repo-item">
                    <img src="./images/repo-fork.svg" alt="" />
                    <p>Forks:  {repo.forks_count}</p>
                </div>
                <div className="repo-item">
                    <img src="./images/repo-issue.svg" alt="" /> 
                    <p>Issues: {repo.open_issues_count}</p>
                </div>
                <div className="repo-item">
                    <img src="./images/repo-watcher.svg" alt="" /> 
                    <p>Watchers: {repo.watchers_count}</p>
                </div>
                <br/>
                <p>Created: {dayjs(repo.created_at).format("DD/MM/YYYY")}</p>
                <p>Last Updated: {dayjs(repo.updated_at).format("DD/MM/YYYY")}</p>
            </div>

            }</div>
     );
}
 
export default Repo;
