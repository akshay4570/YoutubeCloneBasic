import React from 'react';
import {Paper,Typography,TextField} from '@material-ui/core';

let VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>

    console.log(video.id.videoId);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height : "25%",}}>
                <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="Video Player"></iframe>
            </Paper>
            <Paper elevation={6} style={{padding : "15px"}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
            <br/>
            <TextField style={{width:"90%", padding : "5px"}} label="Comments"></TextField>
            <i className="fa fa-user" style={{fontSize:"20px",margin:"20px"}}></i>
        </React.Fragment>    
    );
}

export default VideoDetail;