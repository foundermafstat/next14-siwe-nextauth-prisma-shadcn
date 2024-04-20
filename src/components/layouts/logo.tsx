"use client"

import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/favicon.png" alt="Mafstat" width={58} height={58} />
    </Link>
  )
}

