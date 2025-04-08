import { Header } from "@/components/ui/header";
import { auth0 } from "@/lib/auth0";

const headers = new Headers({
  'Content-Type': 'application/json',
})

export default async function Home() {
  const auth0session = await auth0.getSession();

  const oryClientAuth = async () => {
    const payload = {
      publication: 'straitstimes',
      service: 'epaper',
    }
    headers.set("x-api-key", process.env.IDPF_API_KEY || "");
    headers.set("x-idp", "ory");

    try {
      const res = await fetch('https://api.dev.idp.sph.com.sg/v1/client/nlb/authorize', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      console.log('Response:', data)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  console.log("session", { auth0session });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header>
        <div>Mock External Host Portal</div>
      </Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          !auth0session && <>
            <a href="/auth/login?screen_hint=signup">Sign up with auth0</a>
            <a href="/auth/login">Log in auth0</a>
          </>
        }

        {auth0session && <>
          <div>{JSON.stringify(auth0session)}</div>
          <div>
            <button onClick={oryClientAuth}>Ory Client Authorize</button>
          </div>
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
