import { GradientH4 } from "../../atoms";
import { TitleSection } from "../../molecules";

export const SetupChooseAddressPageTitleSection = () => {
  return (
    <TitleSection>
      <img src="/images/common/logo.svg" alt="logo image" />
      <h1>
        Import your
        <br />
        Crypto Wallet
      </h1>
      <GradientH4>
        Choose the wallet address that you would mainly use.
      </GradientH4>
    </TitleSection>
  );
};
