import { BlackShoesdeatils, Checkout, Login, PinkShoesdeatils, RedShoesdeatils, Regester } from "../Pages"
import { Category } from "../Pages/Category/category"
import { BlueShoesdeatils } from "../Pages/Details/blueshoedetails"
import { Home } from "../Pages/Home/home"
import { LoggedIn } from "../Pages/Profile/Logedin"
export function router(): HTMLElement {
    const loggedIn = !!parseInt(localStorage.getItem("login") as string)
    switch (window.location.pathname) {
        case "/category":
            return Category()
        case "/profile":
            if (loggedIn) {
                return LoggedIn();
            } else {
                return Login();
            }
        case "/regester":
            if (loggedIn) {
                return LoggedIn();
            } else {
                return Regester();
            }
        case "/login":
            if (loggedIn) {
                return LoggedIn();
            } else {
                return Login();
            }
        case "/blueshoesdetails":
            return BlueShoesdeatils()
        case "/blackshoesdetails":
            return BlackShoesdeatils()
        case "/pinkshoesdetails":
            return PinkShoesdeatils()
        case "/redshoesdetails":
            return RedShoesdeatils()
        case "/home":
            return Home()
        case "/checkout":
            return Checkout()
        default:
            return Home()
    }
}