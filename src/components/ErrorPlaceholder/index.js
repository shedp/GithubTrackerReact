import React from 'react';

const ErrorPlaceholder = ({message}) => {
    return ( 
        <div className="Placeholder">
           <img src="./images/git-error.svg" alt="error" />
            <h1>Error: {message}</h1>
        </div>
     );
}
 
export default ErrorPlaceholder;
