"use client";

import useSWR from "swr";

export default function ViewerCount({
  getViewerCount,
}: {
  getViewerCount: () => Promise<number>;
}) {
  const { data } = useSWR(
    "viewer-count",
    () => {
      return getViewerCount();
    },
    {
      refreshInterval: 2_000,
    }
  );

  return <p>{`Viewers: ${data}`}</p>;
}
