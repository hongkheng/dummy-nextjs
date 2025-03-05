import { Header } from "@/components/ui/header";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  console.log("session", { session });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header>
        <div>Mock External Host Portal</div>
      </Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          !session && <>
            <a href="/auth/login?screen_hint=signup">Sign up with auth0</a>
            <a href="/auth/login">Log in auth0</a>
          </>
        }

        {session && <>
          <div>{JSON.stringify(session)}</div>
          <div>
            <a href="/auth/logout">Logout with auth0</a>
          </div>
          </>}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        mock demo
      </footer>
    </div>
  );
}
