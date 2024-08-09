import Search from "./search";
import { useRouter } from "next/router";

export default function GettingStarted() {
  const router = useRouter();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      // backgroundColor: 'black',
      padding: '20px',
      borderRadius: '5%',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
      fontFamily: 'Poppins',
      textAlign: 'center'
    }} >
      <h1>Crypto Market</h1>
      <h2>Navigate the Crypto Universe</h2>

      <hr style={{ width: '100%' }} />

      <img src="/main-page.jpeg" alt="Custom 500 Error Page" style={{
        width: '80%',
        height: 'auto',
        borderRadius: '5%',
        marginBottom: '20px'
      }} />

      <Search />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: "30%" }}>
        <button onClick={() => router.push("/login")} style={{ marginRight: '50px' }} className="loginButton">Login</button>
        <button onClick={() => router.push("/signup")} className="loginButton">Signup</button>
      </div>
    </div>
  );
}
