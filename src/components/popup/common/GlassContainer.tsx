import React from "react";
import { classNames } from "../../../utils/helper";

export const GlassContainer: React.FC<{ padding?: number }> = ({
  children,
  padding = 0,
}) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-lg",
        `p-${padding}`
      )}
    >
      {children}
    </div>
  );
};
