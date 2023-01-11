import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Repo} from '../pages/index.js'

const Result = ({result}) => {
    const [id, setId] = useState(null)

    const handleClick = (e) => {
        setId(e.target.key)
    }

    const username = useSelector(state => state.username)
    return (
        <>
            {result && 
            <div className='results'>
                <div className="user-info">
                    <img src={result[0].owner.avatar_url} width='100px' height='100px'/>
                    <h1>{username}'s Repos</h1>
                </div>
                <ul>
                   {result.map(r => <li key={r.id} onClick={handleClick}>{r.name}</li>)}
                </ul>
                {id && <Repo id={id}/>}
            </div>
            }
        </>
    )
}
 
export default Result;