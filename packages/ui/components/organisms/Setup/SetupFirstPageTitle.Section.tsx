import React from "react";
import { GradientH3 } from "../../atoms";
import { TitleSection } from "../../molecules";

export const SetupFirstPageTitleSection = () => {
  return (
    <TitleSection>
      <img src="/images/common/logo.svg" alt="logo image" />
      <h1>
        Setup your
        <br />
        crypto wallet
      </h1>
      <GradientH3>Import existing wallet, or create a new one!</GradientH3>
    </TitleSection>
  );
};
