import { createContext } from "react" ;

export const  NavContext = createContext();

const categories = ['Category 1', 'Category 2']

export const ProviderValues = [categories]

const NavContextProvider = ({children})=>{

    const categories = ['category 1', 'category 2']

     return(
        <NavContext.Provider value={{categories}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider