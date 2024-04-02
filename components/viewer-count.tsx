"use client";

import useSWR from "swr";

export default function ViewerCount({
  count,
  getViewerCount,
}: {
  count: number;
  getViewerCount: () => Promise<number>;
}) {
  const { data } = useSWR(
    "...",
    () => {
      return getViewerCount();
    },
    {
      fallbackData: count,
      refreshInterval: 3000,
      revalidateOnMount: false,
    }
  );

  return <p>{`Viewers: ${data}`}</p>;
}
