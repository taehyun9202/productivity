import React from 'react'

function UserAvatar(props) {
    return (
        <div className="userAvatar">
            <img src={`https://avatars.dicebear.com/api/human/${props.user}.svg`} />
            <p>Hello {props.user}</p>
        </div>
    )
}

export default UserAvatar
