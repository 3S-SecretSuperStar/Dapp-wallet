import React from "react";
import { useState } from "react";
import { classNames } from "../utils/helper";
import { GlassContainer } from "./GlassContainer";

type SolanaNetwork = "main" | "test" | "dev" | "local";

export const NetworkOptions = () => {
  const [network, setNetwork] = useState<SolanaNetwork>("main");
  return (
    <div>
      <h3 className="text-xl font-medium mb-1">Network</h3>
      <div className="grid grid-cols-2 gap-2">
        <GlassButton
          text="Main"
          selected={network === "main"}
          onClick={() => setNetwork("main")}
        />
        <GlassButton
          text="Test"
          selected={network === "test"}
          onClick={() => setNetwork("test")}
        />
        <GlassButton
          text="Dev"
          selected={network === "dev"}
          onClick={() => setNetwork("dev")}
        />
        <GlassButton
          text="Local"
          selected={network === "local"}
          onClick={() => setNetwork("local")}
        />
      </div>
    </div>
  );
};

const GlassButton: React.FC<{
  text: string;
  selected?: boolean;
  onClick: () => void;
}> = ({ text, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        selected ? "opacity-100" : "opacity-50",
        "hover:opacity-100 transition-opacity"
      )}
    >
      <GlassContainer padding={4}>
        <p
          className={classNames(
            "text-center text-xl font-medium",
            selected ? "text-gray-800" : "text-white"
          )}
        >
          {text}
        </p>
      </GlassContainer>
    </button>
  );
};
