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
      refreshInterval: 3000,
      revalidateOnMount: false,
    }
  );

  return <p>{`Viewers: ${data}`}</p>;
}
