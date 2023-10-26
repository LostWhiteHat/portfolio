import { Component, ReactNode } from "react";

type Button = {
  link: string;
  icon: ReactNode;
  text: string;
  target?: "_blank";
  key?: number;
  toggle?: () => void;
};

type Skillset = {
  icon: ReactNode;
  key?: number;
};

type Project = {
  language?: string;
  title: string;
  description: string;
  link: string;
  key?: number;
};
