import Link from "next/link";
import React from "react";

const getAllProducts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  return data;
};

const PageUsers = async () => {
  const data = await getAllProducts();
  return (
    <div style={{display: "flex", flexDirection : "column"
    }}>
      <Link href={"/"}>&lt;- home</Link>
      <h2>Users:</h2>
      
        {data?.map((item) => (
          <div>

            <Link href={`users/${item?.id}`}>{item?.name}</Link>
          </div>
        ))}
    </div>
  );
};

export default PageUsers;
