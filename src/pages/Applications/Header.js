import React from 'react'

const Header = (props) => {
    return (
        <div>
            <div className="heading">
                <img src="images/side-logo.png" alt="code-queen logo" width="200px" height="100px" />
                <h1 id='title'>{props.title}</h1>
                <p id='description'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Header
