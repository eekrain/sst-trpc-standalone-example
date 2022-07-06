import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "../utils/trpc";

const apiUrl = "https://hw5vxa6j70.execute-api.ap-southeast-1.amazonaws.com";

export default function IndexPage() {
  const hello = trpc.useQuery(["hello", { name: "anjing" }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.message}</p>
    </div>
  );
}

// export default function StaticOnly() {
//   const [queryClient] = useState(() => new QueryClient());
//   const [trpcClient] = useState(() =>
//     trpc.createClient({
//       url: `${apiUrl}`,
//     })
//   );

//   return (
//     <trpc.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>
//         <Hello />
//       </QueryClientProvider>
//     </trpc.Provider>
//   );
// }

export function Hello() {
  const hello = trpc.useQuery(["hello", { name: "Magnus" }]);
  if (!hello.data) return <div>Loading...</div>;

  return <div>{hello.data.message}</div>;
}
