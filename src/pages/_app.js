import '@/styles/globals.css'
import { SSRProvider } from '@react-aria/ssr';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

export default function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <SSRProvider>

    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </SSRProvider>
  );
}


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
