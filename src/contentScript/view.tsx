import React from "react";
import { classNames } from "../utils/helper";
import { getFloatPosition, setFloatPosition } from "../utils/storage";
import {
  CurrencyDollarIcon,
  LibraryIcon,
  MenuIcon,
  RefreshIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { GlassContainer } from "../components/GlassContainer";
import Draggable from "react-draggable";
import { NetworkOptions } from "../components/NetworkOptions";

export const View = () => {
  // states
  const [expand, setExpand] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 12,
    y: 12,
  });

  const onDragEnd = (x: number, y: number) => setFloatPosition({ x, y });

  useEffect(() => {
    getFloatPosition().then((pos) => setPosition(pos));
  }, []);

  return (
    <div
      className="fixed"
      style={{ left: position.x, top: position.y, zIndex: 99999 }}
    >
      <Draggable
        onStop={(e) => {
          const event = e as MouseEvent;
          onDragEnd(event.clientX, event.clientY);
        }}
      >
        <div
          className={classNames(
            "max-w-[300px] text-white",
            expand ? "" : "hover:scale-95"
          )}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setExpand(true)}
              className={classNames(
                "h-12 rounded-full flex items-center justify-center transition-all bg-indigo-900 hover:bg-indigo-800",
                expand ? "w-60" : "w-12"
              )}
            >
              {expand ? (
                <h3 className="text-xl text-white">E3134...HWdcCb</h3>
              ) : (
                <button className="h-12 w-12 flex items-center justify-center bg-indigo-900 rounded-full">
                  <LibraryIcon className="w-6 h-6 text-white" />
                </button>
              )}
            </button>
            <button
              className={classNames(
                "h-12 w-12 items-center justify-center bg-green-600 rounded-full",
                expand ? "hidden" : "flex",
                "transition-all"
              )}
            >
              <MenuIcon className="w-6 h-6 text-white" />
            </button>
            <div
              className={classNames(
                "justify-center items-center gap-2",
                expand ? "flex" : "hidden"
              )}
            >
              <button
                className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-full"
                onClick={() => setExpand(false)}
              >
                <RefreshIcon className="w-6 h-6 text-white" />
              </button>
              <button
                className="h-12 w-12 flex items-center justify-center bg-gray-400 rounded-full"
                onClick={() => setExpand(false)}
              >
                <XIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          <div
            className={classNames(
              "bg-gradient-to-br from-indigo-900 via-teal-800 to-red-900",
              "rounded-2xl w-full h-auto mt-4 p-4"
            )}
            hidden={!expand}
          >
            <h2 className="text-white text-3xl font-bold text-center mb-4">
              200.21 SOL
            </h2>
            <NetworkOptions />
          </div>
        </div>
      </Draggable>
    </div>
  );
};
