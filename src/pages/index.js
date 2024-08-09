import GettingStarted from "@/Components/GettingStarted"
import Favourites from "./favourites";
import { useAuth } from "@/useAuth";
export default function Home() {
  const { user } = useAuth();

  return (
    <>
    {user ? <Favourites/> : <GettingStarted />} 
    </>
  )
}