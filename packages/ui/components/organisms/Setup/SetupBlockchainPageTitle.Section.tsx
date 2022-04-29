import React from "react";
import { GradientH4 } from "../../atoms";
import { TitleSection } from "../../molecules";

export const SetupBlockchainPageTitleSection = () => {
  return (
    <TitleSection>
      <img src="/images/common/logo.svg" alt="logo image" />
      <h1>
        Select
        <br />
        your blockchain
      </h1>
      <GradientH4>
        More blockchains will be supported in near future!
      </GradientH4>
    </TitleSection>
  );
};
