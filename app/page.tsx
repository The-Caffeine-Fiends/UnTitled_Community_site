// app/page.tsx
import { auth, signOut } from "./Auth/Auth";
import { LoginLayout } from "./Components/Login/LoginLayout";

export default async function Home() {
  const session = await auth();

  if (!session) return <LoginLayout />;

  return (
    <div>
      <p>환영합니다, {session.user?.name}님!</p>
      <img src={session.user?.image ?? ""} alt="Profile" />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">로그아웃</button>
      </form>
    </div>
  );
}
