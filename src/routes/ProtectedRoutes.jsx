import LayoutPage from "../components/Layout";
import { Outlet, Navigate } from "react-router-dom";
import { Auth } from "../utils/Auth";

export default function ProtectedRoutes() {
    const { token } = Auth.isAuthorization()

    if (!token) {
        return <Navigate to="/" replace />
    } 

    return (
        <LayoutPage>
            <Outlet />
        </LayoutPage>
    )
}