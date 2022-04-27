import { GradientH3 } from "../../atoms";
import { TitleSection } from "../../molecules";
import React from "react";

export const SetupImportPageTitleSection = () => {
  return (
    <TitleSection>
      <img src="/images/common/logo.svg" alt="logo image" />
      <h1>
        Import your
        <br />
        Crypto Wallet
      </h1>
      <GradientH3>
        Type in your wallet seed words. It should be 12-word sequence.
      </GradientH3>
    </TitleSection>
  );
};
