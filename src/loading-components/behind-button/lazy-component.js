import { lazy } from "react";

const resolveInSeconds = seconds => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), seconds * 2000);
  });
};

export default lazy(() =>
  resolveInSeconds(2).then(() => import("./component"))
);
