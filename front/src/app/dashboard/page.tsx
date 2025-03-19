
import Sidebar from "@/components/sidebar"

import LiveUpdate from "@/components/update";

const Dashboard = () =>{
    return(
        <>
        <div className="grid h-screen grid-cols-[.2fr_1fr] flex flex-col">
            <section className="bg-black text-white">
                <div className="flex-1">
                <Sidebar />
                </div>
            </section>
            <section>
                <div className="my-10 ml-[50vw]">
                    <LiveUpdate />
                </div>
            </section>
        </div>
        </>
    )
}

export default Dashboard;