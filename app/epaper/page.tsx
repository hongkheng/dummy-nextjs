'use client'


// const ory = new FrontendApi(new Configuration(edgeConfig))

// Returns either the email or the username depending on the user's Identity Schema
// const getUserName = (identity: Identity | undefined) =>
//   identity?.traits.email || identity?.traits.username || "user"

export default function Page() {
  // const router = useRouter()
  // const [session, setSession] = useState<Session | undefined>()
  // const [logoutUrl, setLogoutUrl] = useState<string | undefined>()

  // useEffect(() => {
  //   ory
  //     .toSession()
  //     .then(({ data }) => {
  //       // User has a session!
  //       setSession(data)
  //       console.log("session", { data })
  //       // Create a logout url
  //       // ory.createBrowserLogoutFlow().then(({ data }) => {
  //       //   setLogoutUrl(data.logout_url)
  //       // })
  //     })
  //     .catch(() => {
  //       // Redirect to login page

  //       return
  //       // return router.push(edgeConfig.basePath + "/ui/login")
  //     })
  // }, [router])

  // if (!session) {
  //   // Still loading
  //   return null
  // }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1>test dummy home page</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a href="https://priceless-rhodes-xs818rwyhy.projects.oryapis.com/self-service/login/browser">login with Ory</a>

        {/* <p>Hello, {getUserName(session.identity)}</p> */}
          {/* <div>
            <p className="sm:p-20 font-[family-name:var(--font-geist-sans)">
              <a href={logoutUrl}>Log out</a>
            </p>
          </div>         */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  )
}
