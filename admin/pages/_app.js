import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";

export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2VsZWN0LW1vdXNlLTEuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_E9ezc92Zfc7FDtXPYenvcfRTLCXrkGbiyNJ5zJfbZa