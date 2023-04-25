/// <reference types="next/image-types/global" />

import { DefaultSession } from "next-auth";
import Image from "next/image";

export function UserCard( { user }: { user: DefaultSession["user"] } ) {
  console.log("in userCard.tsx");
  console.log(user);

  const imageSrc = user?.image ?? '';

  return (
    <div className="card">
      <div className="card-body">
        <Image
          className="rounded-circle mx-auto d-block" 
          src={imageSrc}
          alt="User Image"
          width={60}
          height={60} 
          />
          <h5 className="card-title text-center">{user?.name}</h5>
          <p className="card-text text-center">{user?.email}</p>
      </div>
    </div>
  );
}