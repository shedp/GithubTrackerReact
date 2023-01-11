import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Avatar = ({result}) => {
    
    return (
        <div className="mini-avatar">
            {result && 
                <a href={result[0].owner.html_url}><img src={result[0].owner.avatar_url}/></a>
            }
        </div>
    )
}

export default Avatar;