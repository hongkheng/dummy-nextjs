"use server"

const headers = new Headers({
  'Content-Type': 'application/json',
})

export async function oryauth() {
  const data = await clientauth()

  if (data) {
    const url = data.data;
    console.log("url", url);
    try {
      const redirectAuth = await fetch(url);
      console.log("success", redirectAuth);
    } catch (error) {
      console.error("cannot redirect", error);
    }
  }
}

async function clientauth() {
  const payload = {
    publication: 'straitstimes',
    service: 'epaper',
  }
  headers.set("x-api-key", process.env.IDPF_API_KEY || "");
  headers.set("x-idp", "ory");
  // headers.set("origin", "https://dummy-nextjs-xi.vercel.app");

  try {
    const res = await fetch('https://api.dev.idp.sph.com.sg/v1/client/nlb/authorize', {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    console.log('Response:', data)
    return data;
  } catch (error) {
    console.error('Error posting data:', error)
  }
}
