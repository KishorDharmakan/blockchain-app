import React from 'react';

const Alert = (props) => {
    console.log('inside Alert props:', props);
    console.log('inside Alert props.errorMessage:', props.errorMessage);
    const errorMessage=props.errorMessage.toString();
    console.log('errorMessage:', errorMessage);
    return (
        <div className="alert alert-danger" role="alert">
            {errorMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        
    )
}

export default Alert;
