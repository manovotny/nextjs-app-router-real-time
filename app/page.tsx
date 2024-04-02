import ViewerCount from "@/components/viewer-count";
import { SWRConfig } from "swr";

const getViewerCount = async function () {
  const response = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1",
    { cache: "no-store" }
  );
  const [count] = await response.json();
  return count;
};

export default function Home() {
  const count = getViewerCount();

  return (
    <SWRConfig
      value={{
        fallback: {
          ["viewer-count"]: count,
        },
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <ViewerCount
          getViewerCount={async function () {
            "use server";
            return getViewerCount();
          }}
        /> */}
      </main>
    </SWRConfig>
  );
}
