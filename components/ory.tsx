'use client'

import { Button } from "./ui/button";

export function OryTest() {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })

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
        mode: 'cors',
        headers,
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      console.log('Response:', data)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  return(
    <Button onClick={oryClientAuth}>Ory Client Authorize</Button>
  )

}
