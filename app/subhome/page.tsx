'use client'
import { Configuration, FrontendApi, Identity, Session } from "@ory/client"
import { edgeConfig } from "@ory/integrations/next"
import { useRouter } from "next/compat/router"
import { useEffect, useState } from "react"

const ory = new FrontendApi(new Configuration(edgeConfig))

const getUserName = (identity: Identity | undefined) =>
  identity?.traits.email || identity?.traits.username || "user"

export default function Page() {
  const router = useRouter()
  const [session, setSession] = useState<Session | undefined>()
  const [logoutUrl, setLogoutUrl] = useState<string | undefined>()

  useEffect(() => {
    if (router && !router.isReady) {
      ory.toSession().then(({ data }) => {
        setSession(data)
        ory.createBrowserLogoutFlow().then(({ data }) => {
          setLogoutUrl(data.logout_url)
        })
        router.reload();
      }).catch((error) => {
        console.log("error", error)
        router.reload();
      })
    }
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
