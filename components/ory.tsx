'use client'

import { oryauth } from "@/app/actions";
import { Button } from "./ui/button";

export function OryTest() {
  async function triggerClick() {
    console.log("Trigger Ory auth")
    const d = await oryauth()
    console.log({ d });
  }

  return(
    <Button onClick={triggerClick}>Ory Client Authorize</Button>
  )
}
