import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
    const [nomeUsuario, setNomeUsuario] = useState('')
    return (
        <>
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

        {nomeUsuario.length > 4 && (
            <>
                <Perfil nomeUsuario="bayerpy" />
                <ReposList nomeUsuario="bayerpy" />
            </>
        )}

        {formularioEstaVisivel && (
            <Formulario />
        )}

        <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button>
        </>
    )
}

export default App
