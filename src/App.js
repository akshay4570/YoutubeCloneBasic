import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './api/youtube';

class App extends Component {
    state = {
        videos : [],
        selectedVideo : null,
        comment : null,
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDDFZfNMpD2YDoxZnT5Qt3bNg6Eq0tAny0',
                q : searchTerm,
            }
        });

        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video})
    }   
    render() {
        const {selectedVideo,videos} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/* Search Bar */}
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            {/* Video Details */}
                            <VideoDetail video = {selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video List */}
                            <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;