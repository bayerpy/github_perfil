// Essas funções chamamos de hokes, que é uma conexão entre o estado do react e o htlm(DOM)
import { useState, useEffect } from "react"

const Formulario = () => {
    //useState, vai nos retornar o valor e uma função que irá mudar o valor
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            return evento.target.value
        })
    }


    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, parabéns, você está aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, infelizmente você não está aprovado!</p>
            )
        }
    }


    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome:" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario