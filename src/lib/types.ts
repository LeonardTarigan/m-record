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

export type Employee = {
  name: string;
  role: string;
  start_time: Date;
  end_time: Date;
  office: Office;
};

export type Office = {
  coordinate: Coordinate;
  name: string;
};
