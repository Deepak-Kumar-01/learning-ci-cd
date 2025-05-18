import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome Back!</h1>
        <p className="text-xl font-semibold text-gray-800">
          {user?.username ? `Hello, ${user.username}!` : "Guest User"}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We're glad to see you again. Let's get started!
        </p>

        {/* Debug only - remove password display in production */}
        {user?.password && (
          <p className="text-xs text-red-500 mt-4">
            (Debug) Password: {user.password}
          </p>
        )}
      </div>
    </div>
  );
}
