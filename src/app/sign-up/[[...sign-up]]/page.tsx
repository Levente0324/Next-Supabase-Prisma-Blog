import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center pt-48 bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950">
      <SignUp forceRedirectUrl="/" fallbackRedirectUrl="/" />
    </div>
  );
}
