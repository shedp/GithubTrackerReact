import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Avatar = ({result}) => {
    
    return (
        <div className="mini-avatar">
            {result && 
                <img src={result[0].owner.avatar_url}/>
            }
        </div>
    )
}
 
export default Avatar;