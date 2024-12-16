import { createContext, useState, useEffect } from "react"

export const charactersContext = createContext([]);


export default function CharacterProvider({children}) {
    let [characterData, setCharacterData] = useState([]);
  
    const getData = async () => {
      let infoApi = await fetch("https://rickandmortyapi.com/api/character")
        .then((resp) => {
          return resp.json();
        })
        .catch((error) => console.log("error:" + error));
  
      setCharacterData(infoApi.results);
    };

    useEffect(() => {
        getData();
      }, []);

    return(
        <charactersContext.Provider value={characterData}>
            {children}
        </charactersContext.Provider>
    )
}