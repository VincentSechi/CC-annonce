"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Register() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email, password, redirect: false, callbackUrl: "http://localhost:3000",});
  };

  return session ? (
    <div>
      <p>Welcome, {session.user.email}</p>
      <button onClick={() => signOut({ redirect: false })}>Logout</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
