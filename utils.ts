import { ValueType } from "recharts/types/component/DefaultTooltipContent";

export const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

export const toUSD = (value: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const toUpperFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const abbrNumber = (x: number) => {
  if (x >= 1000000000) {
    return (x / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (x >= 1000000) {
    return (x / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (x >= 1000) {
    return (x / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return x;
  }
};
