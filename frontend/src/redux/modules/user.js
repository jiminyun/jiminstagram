// imports
import { actionCreators as notiActions } from "redux/modules/notification";
import { GET_RESULT_MSG } from "./msg";
// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USER_LIST = "SET_USER_LIST";
const SET_IMAGE_LIST = "SET_IMAGE_LIST";
const SET_USER_LIST_LIKES = "SET_USER_LIST_LIKES";
const SET_MY_PROFILE = "SET_MY_PROFILE";
const SAVE_MY_PROFILE = "SAVE_USER_PROFILE";
const SET_FOLLOWERS = "SET_FOLLOWERS";
const SET_FOLLOWINGS = "SET_FOLLOWINGS";

// action creators functions

function saveToken(token, username) {
  return {
    type: SAVE_TOKEN,
    token,
    username
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

function setUserList(userList) {
  return {
    type: SET_USER_LIST,
    userList
  };
}

function setFollowUser(userId) {
  return {
    type: FOLLOW_USER,
    userId
  };
}

function setUnfollowUser(userId) {
  return {
    type: UNFOLLOW_USER,
    userId
  };
}

function setImageList(imageList) {
  return {
    type: SET_IMAGE_LIST,
    imageList
  };
}

function setMyProfile(myInfo) {
  return {
    type: SET_MY_PROFILE,
    myInfo
  };
}

function saveMyProfile(myInfo) {
  return {
    type: SAVE_MY_PROFILE,
    myInfo
  };
}
function setFollowers(userList) {
  return {
    type: SET_FOLLOWERS,
    userList
  };
}
function setFollowings(userList) {
  return {
    type: SET_FOLLOWINGS,
    userList
  };
}

const getReultMsg = result => {
  return {
    type: GET_RESULT_MSG,
    result
  };
};

// API actions
// when requesting the change of states to Store, call dispatch with action creator

function facebookLogin(access_token) {
  return function(dispatch) {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          console.log(json);
          dispatch(saveToken(json.token, json.user.username));
        }
      })
      .catch(err => console.log(err));
  };
}

function usernameLogin(username, password) {
  return dispatch => {
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token, json.user.username));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(username, password, email, name) {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email,
        name
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token, json.user.username));
        }
      })
      .catch(err => console.log(err));
  };
}

function getPhotoLikes(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/likes`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setUserList(json));
      });
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    dispatch(setFollowUser(userId));
    dispatch(notiActions.updateNotificationFollowBTN(userId));
    const {
      user: { token }
    } = getState();
    fetch(`/users/${userId}/follow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setUnfollowUser(userId));
        dispatch(notiActions.updateNotificationFollowBTN(userId));
      }
    });
  };
}

function unfollowUser(userId) {
  return (dispatch, getState) => {
    dispatch(setUnfollowUser(userId));
    dispatch(notiActions.updateNotificationFollowBTN(userId));
    const {
      user: { token }
    } = getState();
    fetch(`/users/${userId}/unfollow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setFollowUser(userId));
        dispatch(notiActions.updateNotificationFollowBTN(userId));
      }
    });
  };
}

function getExplore() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/users/explore/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setUserList(json));
      });
  };
}

function searchByTerm(searchTerm) {
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    const userList = await searchUsers(token, searchTerm);
    const imageList = await searchImages(token, searchTerm);
    if (userList === 401 || imageList === 401) {
      dispatch(logout());
    }
    dispatch(setUserList(userList));
    dispatch(setImageList(imageList));
  };
}

function searchUsers(token, searchTerm) {
  return fetch(`/users/search/?username=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

function searchImages(token, searchTerm) {
  return fetch(`/images/search/?hashtags=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

function getMyProfile(username) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch(`/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setMyProfile(json));
      });
  };
}
function updateMyProfile(name, username, website, bio, email, gender) {
  return (dispatch, getState) => {
    const {
      user: { token, username }
    } = getState();

    fetch(`/users/${username}/`, {
      method: "PUT",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        name,
        website,
        bio,
        email,
        gender
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(saveMyProfile(json));
        dispatch(getReultMsg("Profile saved succesfully!"));
      })
      .catch(err => console.log(err));
  };
}
function getFollowers(username) {
  return (dispatch, getState) => {
    const {
      user: { token, username }
    } = getState();
    fetch(`/users/${username}/followers/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setFollowers(json));
      });
  };
}
function getFollowings(username) {
  return (dispatch, getState) => {
    const {
      user: { token, username }
    } = getState();
    fetch(`/users/${username}/followings/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setFollowings(json));
      });
  };
}

// initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  username: localStorage.getItem("username")
};

// reducer

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case SET_USER_LIST:
      return applySetUserList(state, action);
    case FOLLOW_USER:
      return applyFollowUser(state, action);
    case UNFOLLOW_USER:
      return applyUnfollowUser(state, action);
    case SET_IMAGE_LIST:
      return applySetImageList(state, action);
    case SET_USER_LIST_LIKES:
      return applySetUserListLikes(state, action);
    case SET_MY_PROFILE:
      return applySetMyProfile(state, action);
    case SAVE_MY_PROFILE:
      return applySetMyProfile(state, action);
    case SET_FOLLOWERS:
      return applySetUserList(state, action);
    case SET_FOLLOWINGS:
      return applySetUserList(state, action);
    default:
      return state;
  }
}

// reducer functions
function applySetToken(state, action) {
  const { token, username } = action;
  localStorage.setItem("jwt", token);
  localStorage.setItem("username", username);
  return {
    ...state,
    isLoggedIn: true,
    token,
    username
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  return {
    isLoggedIn: false
  };
}

function applySetUserList(state, action) {
  const { userList } = action;

  return { ...state, userList };
}

function applySetUserListLikes(state, action) {
  const { userList } = action;
  return { ...state, userList_likes: userList };

  //return { ...state, userList_likes: userList };
}

function applyFollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updatedUserList = userList.map(user => {
    if (user.id === userId) {
      return { ...user, following: true };
    }
    return user;
  });
  return { ...state, userList: updatedUserList };
}

function applyUnfollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updatedUserList = userList.map(user => {
    if (user.id === userId) {
      return { ...user, following: false };
    }
    return user;
  });
  return { ...state, userList: updatedUserList };
}

function applySetImageList(state, action) {
  const { imageList } = action;
  return {
    ...state,
    imageList
  };
}

function applySetMyProfile(state, action) {
  const { myInfo } = action;
  return {
    ...state,
    myInfo
  };
}

// exports
const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount,
  getPhotoLikes,
  logout,
  followUser,
  unfollowUser,
  getExplore,
  searchByTerm,
  getMyProfile,
  updateMyProfile,
  getFollowers,
  getFollowings
};

export { actionCreators };
// reducer export

export default userReducer;
