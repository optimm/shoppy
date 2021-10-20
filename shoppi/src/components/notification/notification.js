import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const createNotification = (type, message, title) => {
  switch (type) {
    case "info":
      NotificationManager.info(title);
      break;
    case "success":
      NotificationManager.success(message, title, 2000);
      break;
    case "warning":
      NotificationManager.warning(message, title, 3000);
      break;
    case "error":
      NotificationManager.error(message, title, 3000);
      break;
  }
};

export default createNotification;
