"use client";

import * as React from "react";
import { balloons, textBalloons } from "balloons-js";
import { cn } from "@/lib/utils";

export interface BalloonsProps {
  type?: "default" | "text";
  text?: string;
  fontSize?: number;
  color?: string;
  className?: string;
  onLaunch?: () => void;
}

export interface BalloonsHandle {
  launchAnimation: () => void;
}

export const Balloons = React.forwardRef<BalloonsHandle, BalloonsProps>(
  ({ type = "default", text, fontSize = 120, color = "#c8ff3d", className, onLaunch }, ref) => {
    const launchAnimation = React.useCallback(() => {
      if (type === "default") {
        balloons();
      } else if (type === "text" && text) {
        textBalloons([{ text, fontSize, color }]);
      }
      onLaunch?.();
    }, [type, text, fontSize, color, onLaunch]);

    React.useImperativeHandle(ref, () => ({ launchAnimation }), [launchAnimation]);

    return <div className={cn("balloons-container", className)} aria-hidden="true" />;
  }
);

Balloons.displayName = "Balloons";
