import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Repo from '../Repo'

const Result = ({result}) => {
    const [id, setId] = useState(null)

    const handleClick = (id) => {
        setId(id)
    }

    const username = useSelector(state => state.username)
    return (
        <>
            {result && 
            <>
                <div className="userResults">
                    <div className="user-info">
                        <a href={result[0].owner.html_url}><img src={result[0].owner.avatar_url}/></a>
                        <h1>{username}'s Repos</h1>
                    </div>
                    <div className="repo-number"><p>Number of Repositories: {result.length}</p></div>
                    <div className="repos">
                        <ul>
                           {result.map(r => <li key={r.id} onClick={() => handleClick(r.id)}>{r.name}</li>)}
                        </ul>
                    </div>
                </div>
                {id ? <Repo id={id}/> : <div className="repo-placeholder"><img src="./images/git-repo.svg" alt="" /><h1>Select a repo</h1></div>}
            </>
            }
        </>
    )
}
 
export default Result;
