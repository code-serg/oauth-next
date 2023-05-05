"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import { UserCard } from './userCard';


export default function Login() {
  // get session from nextAuth
  // useSession uses react
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // console.log(session);
  
  // if session exists, show their profile and a logout button
  if(session) {
    return (
      <>    
        <div className="d-flex justify-content-center p-2">
          <button className="btn btn-primary" onClick={() => signOut()}>Sign out of Google</button>
        </div>
        {/* Pass session info to server component. This will save the user's info */}
        <UserCard user={session?.user} />
      </>
    )
  } else {
    {/* if no session, show a login button */}
    return (
      <>
        <div className="d-flex justify-content-center p-2">
          <button className="btn btn-primary" onClick={() => signIn()}>Sign in with Google</button>
        </div>
      </> 
    )
  }
}