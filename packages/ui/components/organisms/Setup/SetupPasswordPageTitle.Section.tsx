import React from "react";
import { GradientH3 } from "../../atoms";
import { TitleSection } from "../../molecules";

export const SetupPasswordPageTitleSection = () => {
  return (
    <TitleSection>
      <img src="/images/common/logo.svg" alt="logo image" />
      <h1>
        Create
        <br />
        New Password
      </h1>
      <GradientH3>
        Last step. Setup your password! (Should be 5~12 characters long)
      </GradientH3>
    </TitleSection>
  );
};
