import { createServerFn } from "@tanstack/react-start";
import { db, eventTable } from "~/db";

const getData = createServerFn().handler(async () => {
  const res = await db.select().from(eventTable);
  return res;
});

export const Route = createFileRoute({
  component: Home,
  loader: () => getData(),
});

function Home() {
  const data = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
