import React,{createContext,useState} from 'react'


const Provider = (props) => {
    const [data,setData] = useState([])
    return (
        <div>
            <appContext.Provider value={[data,setData]}>
                {props.children}
            </appContext.Provider>
        </div>
    );
}

export default Provider;
export const appContext = createContext();