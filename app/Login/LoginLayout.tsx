import { signIn } from "../Auth/Auth";
import { LoginButton } from "./Components/LoginButton/LoginButton";

export function LoginLayout() {
  const handleSignIn = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-700 bg-black p-8">
        {/* 커뮤니티 헤더 */}
        <div className="flex items-center justify-center mb-8">
          <svg
            className="w-8 h-8 text-white mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">
          어서와 여기는 처음이지?
        </h2>

        {/* 환영 메시지 */}

        {/* 로그인 버튼 */}
        <LoginButton handleSignIn={handleSignIn} />

        {/* 약관 동의 텍스트 */}
        <p className="text-xs text-gray-400 text-center mt-6">
          계속 진행하면 커뮤니티의 서비스 약관 및 개인 정보 보호정책에 동의하는
          것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}
