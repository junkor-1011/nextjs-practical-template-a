import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

import type { AppPropsWithLayout } from '@/lib/next/types';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>,
  );
};

export default MyApp;
