import Link from 'next/link'
import React from 'react'

const PageHome = () => {
  return (
    <div>
      <h2>welcome home</h2>
      <Link href={"/users"}>users</Link>
    </div>
  )
}

export default PageHome