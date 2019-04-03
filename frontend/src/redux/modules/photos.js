// imports
import { actionCreators as userActions } from "redux/modules/user";
import uuidv1 from "uuid/v1";
import { GET_RESULT_MSG } from "./msg";
// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const SET_FEED_DETAIL = "SET_FEED_DETAIL";
const ADD_PHOTO = "ADD_PHOTO";
// action creators
function addComment(photoId, comment) {
  return {
    type: ADD_COMMENT,
    photoId,
    comment
  };
}

const getReultMsg = result => {
  return {
    type: GET_RESULT_MSG,
    result
  };
};

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  };
}

function doUnlikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}

function setFeedDetail(feedDetail) {
  return {
    type: SET_FEED_DETAIL,
    feedDetail
  };
}

// api actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)));
  };
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    dispatch(doLikePhoto(photoId));
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doUnlikePhoto(photoId));
      }
    });
  };
}

function unlikePhoto(photoId) {
  return (dispatch, getState) => {
    dispatch(doUnlikePhoto(photoId));
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/unlikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doLikePhoto(photoId));
      }
    });
  };
}

function commentPhoto(photoId, message) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/comments/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        if (json.message) {
          dispatch(addComment(photoId, json));
        }
      });
  };
}

function getFeedDetail(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}`, {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(setFeedDetail(json)));
  };
}

function saveFeed(photoObj, history) {
  const arrTags = photoObj.tags.replace(/(\s*)/g, "").split("#");
  const formData = new FormData();
  formData.append("file", photoObj.file, `${uuidv1()}.jpg`);
  formData.append("location", photoObj.location);
  formData.append("caption", photoObj.caption);
  formData.append("tags", JSON.stringify(arrTags.slice(1)));

  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      },
      body: formData
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        if (response.ok) {
          dispatch(getReultMsg({ photoSave: "A photo saved succesfully!" }));
        }
      })
      //.then((json) => dispatch(getFeed()))
      .catch(err => console.log("error", err));
  };
}

// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyUnlikePhoto(state, action);
    case ADD_COMMENT:
      return applyAddComment(state, action);
    case SET_FEED_DETAIL:
      return applySetFeedDetail(state, action);
    case ADD_PHOTO:
      return applyAddPhoto(state, action);
    default:
      return state;
  }
}

// reducer functions
function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

function applyLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;

  const updateFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: true, like_count: photo.like_count + 1 };
    }
    return photo;
  });

  return {
    ...state,
    feed: updateFeed
  };
}

function applyUnlikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;

  const updateFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
    }
    return photo;
  });
  return {
    ...state,
    feed: updateFeed
  };
}

function applyAddComment(state, action) {
  const { photoId, comment } = action;
  const { feed } = state;
  const updateFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return {
        ...photo,
        comments: [...photo.comments, comment]
      };
    }
    return photo;
  });
  return { ...state, feed: updateFeed };
}

function applySetFeedDetail(state, action) {
  const { feedDetail } = action;
  return { ...state, currentPostId: feedDetail.id };
}

function applyAddPhoto(state, action) {
  const { newPhoto } = action;
  const { feed } = state;

  return {
    ...state,
    feed: [newPhoto].concat(feed)
  };
}

// expoerts

const actionCreators = {
  getFeed,
  saveFeed,
  likePhoto,
  unlikePhoto,
  commentPhoto,
  getFeedDetail
};

export { actionCreators };

// default reducer export

export default reducer;
