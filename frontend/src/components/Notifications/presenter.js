import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Loading from "components/Loading";
import NotifictionRow from "components/NotifictionRow";

const Notifications = props => {
  if (props.loading) {
    return <RenderLoading />;
  } else if (props.notificationList) {
    return <RenderNotifications {...props} />;
  }
};

const RenderLoading = () => (
  <div class="nt_container">
    <Loading />
  </div>
);
const RenderNotifications = props => (
  <div class="nt_container">
    {props.notificationList.map(noti_user => (
      <NotifictionRow key={noti_user.id} noti_user={noti_user} />
    ))}
  </div>
);

Notifications.propTypes = {
  loading: PropTypes.bool.isRequired,
  notificationList: PropTypes.array
};

export default Notifications;
