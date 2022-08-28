import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import OnDemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventNoteIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import React from 'react';
import './Feed.css'
import InputOption from './InputOption';

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
                <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9'/>
                <InputOption Icon={OnDemandVideoIcon} title='Video' color='#5f9b41'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
                <InputOption Icon={ArticleIcon} title='Write article' color='#e16745'/>
                </div>
            </div>
        </div>
    )
}

export default Feed