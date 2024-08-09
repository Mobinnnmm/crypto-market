import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import Layout from '@/Components/layout';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("mDct-VJnimxzudmJR");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
