'use client'
import { Configuration, FrontendApi, Identity, Session } from "@ory/client"
import { edgeConfig } from "@ory/integrations/next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ory = new FrontendApi(new Configuration(edgeConfig))

// Returns either the email or the username depending on the user's Identity Schema
const getUserName = (identity: Identity | undefined) =>
  identity?.traits.email || identity?.traits.username || "user"

export default function Page() {
  const router = useRouter()
  const [session, setSession] = useState<Session | undefined>()
  const [logoutUrl, setLogoutUrl] = useState<string | undefined>()

  useEffect(() => {
    ory.toSession().then(({ data }) => {
      setSession(data)
      ory.createBrowserLogoutFlow().then(({ data }) => {
        setLogoutUrl(data.logout_url)
      })
    }).catch((error) => {
      console.log("error", error)
      router.reload();
    })
  }, [router])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1>test dummy home page</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <a href="">Trigger custom auth flow</a>
        </div>
        {
          !session && <a href="https://priceless-rhodes-xs818rwyhy.projects.oryapis.com/self-service/login/browser?return_to=https://dummy-nextjs-xi.vercel.app/epaper">Login with Ory Network</a>
        }
        {
          session && <div>
            <p>User: {getUserName(session.identity)}</p>

            <a href={logoutUrl}>Logout Ory Network</a>
          </div>
        }
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  )
}
