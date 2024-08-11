/*****************************************************************************
* WEB422 – Project
* I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Group member Name:
* Name: Mobin Latifi (129267225)
* Name: Alex Choi    (177037215)
* Date: July 14, 2024
*****************************************************************************/

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
