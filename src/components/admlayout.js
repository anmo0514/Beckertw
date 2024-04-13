import Admnavbar from "./admnavbar.js";

export default function Layout({children}) {
    return (
        <>
        <Admnavbar/>
        <main>{children}</main>
        </>
    );
}