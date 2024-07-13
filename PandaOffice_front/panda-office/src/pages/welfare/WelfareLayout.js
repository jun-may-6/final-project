import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer";
import WelfareSidebar from "./WelfareSidebar";

function Welfare() {
    return (
        <>
            <WelfareSidebar />
            <div className="common-comp">
                <div className="pd">
                    <Outlet />   {/* 메인 콘텐츠 레이아웃 (모르면 공부하셈) */ }
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Welfare;