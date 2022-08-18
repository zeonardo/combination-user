import React from "react";

export default interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  color?: string,
  image?: string,
  position?: string,
  size?: string,
  offset?: string
}

export interface StyledBackgroundProps extends React.HTMLAttributes<HTMLElement> {
  color?: string,
  $image?: string,
  $position?: string,
  $size?: string,
  $offset?: string
}