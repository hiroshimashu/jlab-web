import React from "react";
import RoutezDetail from "./routez_detail";
import RoutezMenu from "./routez_menu";
import RoutezDemo from "./routeZ_demo";
import Footer from "../Common/footer";

const RouteZ = () => {
    return (
        <div className = "routeZ-wrapper">
            <RoutezDetail />
            <RoutezMenu />
            <RoutezDemo />
            <Footer
                height = "379.596px"
                top = "295.309px"
            />
        </div>
    )
}

export default RouteZ;
