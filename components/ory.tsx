'use client'

import { oryauth } from "@/app/actions";
import { Button } from "./ui/button";

export function OryTest() {
  return(
    <Button onClick={() => oryauth()}>Ory Client Authorize</Button>
  )

}
