import CreateIcon from '@mui/icons-material/Create';
import React from 'react';
import './Feed.css'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                    <input type='text'></input>
                    <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                {/* Options */}
                
                </div>
            </div>
        </div>
    )
}

export default Feed