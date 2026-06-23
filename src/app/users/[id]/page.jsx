import Link from 'next/link';
import React from 'react'

const getOneUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const oneUser = res.json();
  return oneUser 
}


const PageOneUser = async ({params}) => {
  const {id} = await params;
  const oneUser = await getOneUser(id)  
  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <Link href={"/users"}>&lt;- back</Link>
      <p>id: {oneUser?.id}</p>
      <p>name: {oneUser?.name}</p>
      <p>email: {oneUser?.email}</p>
      <p>phone: {oneUser?.phone}</p>
    </div>
  )
}

export default PageOneUser