import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Repo from '../Repo'
import dayjs from 'dayjs';
import LanguagesChart from '../LanguagesChart';

const Result = ({result}) => {
    const [id, setId] = useState(null)

    const handleClick = (id) => {
        setId(id)
    }

    const profile = useSelector(state => state.profile)
    const repos = useSelector(state => state.repos)
    const languages = repos.map(repos => repos.language)

    const languageData = languages.reduce((l, val) => {
        if(val === null) val = 'null';
        l[val] = (l[val] || 0) + 1;
        return l;
    }, {});

    console.log(languageData)
    
    return (
        <>
            {profile && 
            <>
                {repos && <>
                    <div className="userResults">
                        <div className="user-info">
                            <a href={profile.html_url}><img src={profile.avatar_url}/></a>
                            <h1>{profile.login}</h1>  
                        </div>
                        <LanguagesChart data={languageData}/>
                        <div>Joined {dayjs(profile.created_at).format("DD.MM.YYYY")}</div>
                        <div>Followers: {profile.followers}</div>
                        <div className="repo-number"><p>Number of Repositories: {profile.public_repos}</p></div>
                        <div className="repos">
                            <ul>
                               {repos.map(r => <li key={r.id} onClick={() => handleClick(r.id)}>{r.name}</li>)}
                            </ul>
                        </div>
                    </div>
                    {id ? <Repo id={id}/> : 
                    <div className="repo-placeholder">
                        <img src="./images/git-repo.svg" alt="" />
                        <h1>{profile.public_repos != 0 ? "Select a repo" : "No repos"}</h1>
                    </div>}
                </>}
            </>
            }
        </>
    )
}
 
export default Result;
