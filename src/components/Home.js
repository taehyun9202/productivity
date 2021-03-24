import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import CreateItem from './CreateItem'
import './Home.css'

function Home(props) {
    const [ create, setCreate ] = useState(false)
    const createItem = () => {
        setCreate(true)
    }
    return (
        <div className='home'>
            { create ? <CreateItem /> : null }
            <AddIcon className="addIcon" onClick={createItem} open={create} />
        </div>
    )
}

export default Home
