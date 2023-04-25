import { DefaultSession } from "next-auth";

export function UserCard( { user }: { user: DefaultSession["user"] } ) {
  console.log("in userCard.tsx");
  console.log(user);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user?.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user?.email}</h6>
        <p className="card-text">Hello</p>
          {user?.image}
      </div>
    </div>
  );
}