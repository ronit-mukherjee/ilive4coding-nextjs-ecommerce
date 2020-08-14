import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
