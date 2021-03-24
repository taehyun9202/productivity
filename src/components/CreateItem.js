import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

function CreateItem(props) {
    const closeModal = e => {
        props.open(false)
    }
    return (
        <div className="createItem">
            <p>Create Item</p>
            <CloseIcon onClick={closeModal} />
        </div>
    )
}

export default CreateItem
