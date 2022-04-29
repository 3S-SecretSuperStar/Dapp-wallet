import { GradientH4 } from "../../atoms";
import { TitleSection } from "../../molecules";

export const SetupUsernamePageTitleSection = () => {
  return (
    <TitleSection>
      <img src="/images/common/logo.svg" alt="logo image" />
      <h1>
        Setup your
        <br />
        Username
      </h1>
      <GradientH4>Last step! We need your name to call you.</GradientH4>
    </TitleSection>
  );
};
