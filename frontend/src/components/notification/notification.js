// import React from "react";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";

// const createNotification = (type, message, title) => {
//   switch (type) {
//     case "info":
//       NotificationManager.info(title);
//       break;
//     case "success":
//       NotificationManager.success(message, title, 2000);
//       break;
//     case "warning":
//       NotificationManager.warning(message, title, 3000);
//       break;
//     case "error":
//       NotificationManager.error(message, title, 3000);
//       break;
//   }
// };

// export default createNotification;

import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  message,
  severity,
  isOpen,
  setisOpen,
}) {
  React.useEffect(() => {
    setTimeout(() => {
      setisOpen(false);
    }, 1000);
  }, []);
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setisOpen(false);
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isOpen}
        autoHideDuration={1900}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
