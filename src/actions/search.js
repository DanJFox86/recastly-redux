import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // return {
  //   type: 'search',
  //   q
  // }


  //invoke searchYouTube

  return (q) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    var newVideoList = searchYouTube(options, changeVideoList);
    // console.log(newVideoList.videos)
    return {
      type: 'search',
      videos: newVideoList.videos
    };
  }

  //ChangeVideo
  //CHangeVideoList
};

export default handleVideoSearch;
