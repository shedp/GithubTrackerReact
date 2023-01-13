import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Avatar = ({result}) => {
    return (
        <div className="mini-avatar">
            {result && 
                <a href={result.html_url}><img src={result.avatar_url}/></a>
            }
        </div>
    )
}

export default Avatar;