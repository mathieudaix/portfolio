import '../src/styles/index.scss'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
    const LayoutPage = Component.PageLayout || Layout

    return (
        <LayoutPage>
            <Component {...pageProps} />
        </LayoutPage>
    )
}