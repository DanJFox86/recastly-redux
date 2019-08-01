import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  var options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };

  return (dispatch) => {
    searchYouTube(options, (response) => {
      dispatch(changeVideo(response[0]));
      dispatch(changeVideoList(response));
    })
  }

};

export default handleVideoSearch;
