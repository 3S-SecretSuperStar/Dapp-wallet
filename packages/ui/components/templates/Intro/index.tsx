import React from "react";
import { IntroCompassPage } from "./IntroCompass.Page";
import { IntroPayFriendsPage } from "./IntroPayFriends.Page";
import { IntroManagePage } from "./IntroManage.Page";
import { useIntroPage } from "hooks";

export const PopupIntroPage = () => {
  const { currentPage } = useIntroPage();
  return (
    <>
      {currentPage === "compass" && <IntroCompassPage />}
      {currentPage === "friends" && <IntroPayFriendsPage />}
      {currentPage === "manage" && <IntroManagePage />}
    </>
  );
};
