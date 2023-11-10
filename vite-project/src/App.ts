import {Layout} from "./components/"
import { router } from "./router"
export const App = ()=>{
    return Layout({
        children:[router()]
    })
    
}