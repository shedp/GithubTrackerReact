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
                        <img src={result[0].owner.avatar_url} width='100px' height='100px'/>
                        <h1>{username}'s Repos</h1>
                    </div>
                    <ul>
                       {result.map(r => <li key={r.id} onClick={() => handleClick(r.id)}>{r.name}</li>)}
                    </ul>
                </div>
                {id && <Repo id={id}/>}
            </>
            }
        </>
    )
}
 
export default Result;