import { useState } from "react";
import styles from './Carros.module.css'

const Carros = () => {
    const n = 15;

    const abertura = "{("
    const fechamento = ")}"
    const abreChaves = "{"
    const fechaChaves = "}"

    const [cars] = useState([
        {id: 0, nome: 'Palio'},
        {id: 1, nome: 'Onix'},
        {id: 2, nome: 'Byd'},
        {id: 3, nome: 'Corolla'},
        {id: 4, nome: 'Etios'}
    ]);

    return (
        <>
            <ul className={styles.alinhamento}>
                {cars.map((car) => (
                    <li key={car.id} className={styles.carrosComponent}>{car.nome}</li>
                ))}
            </ul>
            <h1 style={{color: "green", background: "none"}}>Css inline</h1>
            <p style={{color: "blue", padding: "10px", borderTop: "2px solid red"}}>
                Parágrafo para css inline
            </p>
            <h1 style={{color: "gold", background: "#FFF"}}>Css inline dinâmico</h1>
            <p style={(n < 10) ? {color:"purple"} : {color:"pink"}}>
                Parágrafo para css inline dinâmico
                <br />
                Estrutura: {abreChaves}(condição) ? {abreChaves}ex: color: "purple"{fechaChaves} : {abreChaves}ex: color: "pink"{fechaChaves}{fechaChaves}
                <br />
                Estrutura: {abreChaves}(condição) ? {abreChaves}se true{fechaChaves} : {abreChaves}se false{fechaChaves}{fechaChaves}
            </p>
            <p style={(n > 10) ? {color:"purple"} : {color:"pink"}}>
                Parágrafo para css inline dinâmico
                <br />
                Estrutura: {abreChaves}(condição) ? {abreChaves}ex: color: "purple"{fechaChaves} : {abreChaves}ex: color: "pink"{fechaChaves}{fechaChaves}
                <br />
                Estrutura: {abreChaves}(condição) ? {abreChaves}se true{fechaChaves} : {abreChaves}se false{fechaChaves}{fechaChaves}
            </p>
        </>
    )
}

export default Carros