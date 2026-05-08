'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Logged in!");
      router.push("/admin/dashboard");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <main className="flex flex-col h-screen w-full items-center">
      <h1 className="text-4xl mt-10">ChimeraKraft</h1>

      <form
        onSubmit={handleLogin}
        className="mt-20 flex flex-col gap-4 w-80"
      >
        <div>
          <label>Username</label>
          <input
            type="text"
            className="border w-full p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            className="border w-full p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white p-2"
        >
          Login
        </button>
      </form>
    </main>
  );
}