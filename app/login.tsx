"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import { UserCard } from './userCard';


export default function Login() {
  // get session from nextAuth
  // useSession uses react
  const { data: session, status } = useSession();
  console.log(`in login.tsx: ${session}`);
  console.log(`in login.tsx:`);
  console.log({useSession});

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  // if session exists, show their profile and a logout button
  if(session) {
    return (
      <>    
        <button className="btn btn-primary" onClick={() => signOut()}>Sign out of Google</button>
        {/* Pass session info to server component. This will save the user's info */}
        <UserCard user={session?.user} />
      </>
    )
  } else {
    {/* if no session, show a login button */}
    return (
      <>
        <button className="btn btn-primary" onClick={() => signIn()}>Sign in with Google</button>
      </> 
    )
  }
}