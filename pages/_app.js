import '../styles/globals.scss'
import { Toaster } from 'sonner'


export default function App({ Component, pageProps }) {
  return (<><Toaster position='bottom-left' richColors/><Component {...pageProps} /></>)
}
