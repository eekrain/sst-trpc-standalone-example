import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./utils/trpc";

const apiUrl = process.env.REACT_APP_API_URL ?? "";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: `${apiUrl}`,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hello />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export function Hello() {
  const hello = trpc.useQuery(["hello", { name: "Magnus" }]);
  if (!hello.data) return <div>Loading...</div>;

  return <div>{hello.data.message}</div>;
}
