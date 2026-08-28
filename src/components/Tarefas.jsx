import { useState, useEffect } from "react"
const Tarefas = () => {

    //HOOK- useState-Manipula o estado da variável
    const [tarefas, setTarefas] = useState(() => {
        const salvarTarefa = localStorage.getItem("item-tarefa");
        return salvarTarefa ? JSON.parse(salvarTarefa) : [];
    });
    const [campo, setCampo] = useState("");

    //HOOçK- useEffect -Realiza um efeito colateral, nesse caso atualiza a tarefa em tempo real
    useEffect(() => {
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas))
    }, [tarefas])

    return (
        <>

        </>
    )
}

export default Tarefas