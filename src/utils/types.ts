import { ReactNode } from "react";

export type NavigationProps = {
  path: string;
  label: string;
  icon: ReactNode;
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};
