
import Sidebar from "@/components/sidebar"

const Dashboard = () =>{
    return(
        <>
        <div className="grid h-screen grid-cols-[.2fr_1fr]">
            <section className="sidebar">
                <div className="flex-1">
                <Sidebar />
                </div>
                <section>
                    
                </section>
            </section>
        </div>
        </>
    )
}