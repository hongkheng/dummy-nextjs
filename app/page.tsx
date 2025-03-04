import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  console.log("session", { session });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header>
        <Button variant="outline">login with auth0</Button>
      </Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p>Pretend X IDP</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
