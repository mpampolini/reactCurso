import { useState } from 'react'

import './MyForm.css'

const MyForm = ({user}) => {
    // 3 - gerenciamento de dados
    const[name, setName] = useState(user ? user.name : '');
    const[email,setEmail] = useState(user ? user.email : '');
    const[bio, setBio] = useState(user ? user.bio : '');    
    const[role, setRole] = useState(user ? user.role : '');

    const[teste, setTeste] = useState('');
    const[contador, setContador] = useState(0);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);
        console.log('Enviando o formulário');

        //Todo: Validar
        //Todo: Enviar para API

        // 7 - Limpar os inputs
        setName('');
        setEmail('');
        setBio('');
    }

    const handleContador = () => {
        setContador(contador + 1);
    }

    console.log(name);
    console.log(email);

    return (
        <>
            <input type="text" name="teste" onChange={(e) => setTeste(e.target.value)}/>
            <button onClick={handleContador} >Somar</button>
            <h2>Teste: {teste}</h2>
            <h2>Contador: {contador}</h2>
            {/* 1 - criação de form */}
            <form onSubmit={handleSubmit}>
                {/* 6 Controled Inputs */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        onChange={handleName}
                        value={name} // controlled input
                    />
                </div>
                {/* 2 - label envolvendo input */}
                <label>
                    <span>E-Mail:</span>
                    {/* 4 Simpl */}
                    <input type="email"
                     name='email' 
                     placeholder="E-Mail" 
                     onChange={(e) => setEmail(e.target.value)}
                     value={email} // controlled input
                    />
                </label>
                {/* 8 - TextArea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" 
                     placeholder="Descrição do usuário"
                     onChange={(e) => setBio(e.target.value)}
                     value={bio} // controlled input
                     ></textarea>
                </label>
                {/* 9 - Select */}
                <label>
                    <span>Função do sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default MyForm