import ViewerCount from "@/components/viewer-count";

const getViewerCount = async function () {
  const response = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1",
    { cache: "no-store" }
  );
  const [count] = await response.json();
  return count;
};

export default async function Home() {
  const count = await getViewerCount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ViewerCount
        count={count}
        getViewerCount={async function () {
          "use server";
          return getViewerCount();
        }}
      />
    </main>
  );
}
