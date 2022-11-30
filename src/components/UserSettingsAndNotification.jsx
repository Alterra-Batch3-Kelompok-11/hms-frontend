import Notification from "../assets/Notification.svg";
import UserSettings from "../assets/UserSettings.svg";

function UserSettingsAndNotification() {
  return (
    <>
      <div className="d-flex p-2 img-fluid">
        <a style={{ cursor: "pointer" }} className="mx-4">
          <img src={Notification} className="d-none d-md-block" />
        </a>
        <a style={{ cursor: "pointer" }}>
          <img src={UserSettings} className="d-none d-md-block" />
        </a>
      </div>
    </>
  );
}

export default UserSettingsAndNotification;
