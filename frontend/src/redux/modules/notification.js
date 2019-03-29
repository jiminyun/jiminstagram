import { actionCreators as userActions } from "redux/modules/user";
//actions

const SET_NOTIFICTIONS = "SET_NOTIFICATIONS";
const UPDATE_FOLLOW_BTN = "UPDATE_FOLLOW_BTN";

//action Creators
function setNotifications(notificationList) {
  return {
    type: SET_NOTIFICTIONS,
    notificationList
  };
}

function updateFollowBTN(notificationList) {
  return {
    type: UPDATE_FOLLOW_BTN,
    notificationList
  };
}

//api actions
function getNotification() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/notifications/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        //console.log(response.json());
        return response.json();
      })
      .then(json => dispatch(setNotifications(json)));
  };
}

function updateNotificationFollowBTN(userId) {
  return (dispatch, getState) => {
    //console.log(getState);
    const {
      notification: { notificationList }
    } = getState();

    const updatedNotificationList = notificationList.map(noti => {
      if (noti.creator.id === userId) {
        return {
          ...noti,
          creator: { ...noti.creator, following: !noti.creator.following }
        };
      }
      return noti;
    });
    dispatch(updateFollowBTN(updatedNotificationList));
  };
}

//initial state
const initialState = {};
//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICTIONS:
      return applySetNotificaions(state, action);
    case UPDATE_FOLLOW_BTN:
      return applySetNotificaions(state, action);
    default:
      return state;
  }
}

// reducer functions
function applySetNotificaions(state, action) {
  const { notificationList } = action;

  return {
    ...state,
    notificationList
  };
}

//exports

const actionCreators = {
  getNotification,
  updateNotificationFollowBTN
};

export { actionCreators };

export default reducer;
