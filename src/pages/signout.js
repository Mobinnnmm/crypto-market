import { useRouter } from "next/router";
export default function signout() {
    const router = useRouter();
    const handleRoute = () => {
        router.push('/');
    }
    return(
        <button onClick={handleRoute}>signout</button>

    )

}