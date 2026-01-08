import { signOut } from "../Auth/Auth";
import { Session } from "next-auth";
export function HomeLayout({ session }: { session: Session }) {
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
