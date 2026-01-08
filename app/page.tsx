// app/page.tsx
import { auth, signOut } from "./Auth/Auth";
import { LoginLayout } from "./Login/LoginLayout";
import { HomeLayout } from "./Home/HomeLayout";

export default async function Home() {
  const session = await auth();

  if (!session) return <LoginLayout />;

  return (
    <div>
      <HomeLayout session={session} />
    </div>
  );
}
