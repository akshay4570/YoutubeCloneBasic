import React from 'react';
import {Grid,Paper,Typography} from '@material-ui/core';

let VideoItem = ({video,onVideoSelect}) => {
    return (
        <Grid item xs = {12}>
            <Paper style = {{alignItems :"center",cursor : "pointer",height:"10%"}} onClick = {() => {onVideoSelect(video)}}>
                <img style={{marginRight : "10%"}} src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;