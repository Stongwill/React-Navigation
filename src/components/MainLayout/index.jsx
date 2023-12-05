import { Outlet } from "react-router-dom"
import { Navigation } from "../Navigation"

export const MainLayout = () => {
    return (
        <section className="block-nav">
        <div className="container">
          <div className="block-nav__body">
                <Navigation /> 
            <div className="block-nav__content">
                 <Outlet/>
            </div>
          </div>
        </div>  
      </section>
    )
}