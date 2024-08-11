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