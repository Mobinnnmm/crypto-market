// import { useRouter } from "next/router";
// import CryptoList from "./cryptoList";

// export default function GettingStarted() {
//   const router = useRouter();
  
//   return (
//     <>

// <h1 style={{ marginTop: '100px'}}>Crypto Market</h1>
//         <h2>Navigate the Crypto Universe</h2>

//       <img 
//         src="/main-page.jpeg" 
//         alt="Custom 500 Error Page" 
//         style={{
//           borderRadius: '5%',
//           marginBottom: '20px',
//           marginTop: '100px',
//           width: '100%',
//           height: '50vh'
//         }} 
//       />
//               <button 
//           onClick={() => {
//             const element = document.getElementById("crypto-market");
//             if (element) {
//               element.scrollIntoView({ behavior: "smooth" });
//             }
//           }}
//           style={{
//             marginTop: '20px',
//             padding: '10px 20px',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//            View all Coins
//         </button>
//       <div 
//         style={{
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '250vh',
//           padding: '20px',
//           borderRadius: '10%',
//           boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
//           fontFamily: 'Poppins',
//           textAlign: 'center'
//         }} 
//       >
//         <hr id="crypto-market" style={{ width: '100%' }} />

//         <div>  
//           <CryptoList />
//           </div>


//       </div>
//     </>
//   );
// }


import { useRouter } from "next/router";
import CryptoList from "./cryptoList";

export default function GettingStarted() {
  const router = useRouter();
  
  return (
    <>
      <h1 style={{ marginTop: '100px'}}>Crypto Market</h1>
      <h2>Navigate the Crypto Universe</h2>

      <img 
        src="/main-page.jpeg" 
        alt="Custom 500 Error Page" 
        style={{
          borderRadius: '5%',
          marginBottom: '20px',
          marginTop: '100px',
          width: '100%',
          height: '50vh'
        }} 
      />

      <button 
        onClick={() => {
          const element = document.getElementById("crypto-market");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        View all Coins
      </button>

      <div 
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '250vh',
          padding: '20px',
          borderRadius: '10%',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
          fontFamily: 'Poppins',
          textAlign: 'center'
        }} 
      >
        <hr id="crypto-market" style={{ width: '100%' }} />

        <div >  
          <CryptoList />
        </div>
      </div>
    </>
  );
}
