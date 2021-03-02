import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
  <Component {...pageProps} />

export default appWithTranslation(MyApp)
