//indicar que a página é componente do lado do cliente 
"use client";

import { useEffect } from "react";

 export default function home() {
  //setState -> Aramazenamento de estado nas variáveis locais 
  const [tarefas, setTarefas] = useState([]); //array para armazenamento das tarefas 
  const [novaTarefa, setNovaTarefa] = useState(""); //estado para nova tarefa
 
  //userEffect 
  useEffect(()=>{
    fetchTarefas();
  });

  const fetchTarefas = async () =>{
        // conecta com api usando fetch para pegar os dados
        const resposta = await fetch("api/tarefas");
        // transforma os dados em Json
        const dados = await resposta.json();
        // atualiza a lista de tarefas com SetState
        setTarefas(dados.data);
    };

    //adicionar nova tarefa 
    const addTarefa = async () =>{
      const resposta = await fetch("api/tarefas",{
         method: "POST",//passa o método
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({titulo: navaTarefa})
      });
      const dados = await resposta.json();//converte a resposta em json
      setTarefas([...tarefas, dados,data]);//atualiza a lista de tarefas
      setNovaTarefa(""); //limpa o compo do input
    };

    //deletoTarefas 
    const deleteTarefa = async (id) =>{
      await fetch(`/api/tarefas/${id}`,{
        method: "DELETE",
      });
      //setTarefas(tarefas.filter((tarefas)=> tarefas._id !== id));
      fetchTarefas();
    }
  }

    //atualizar tarefas
    const updateTarefa = async (id, concluida) =>{
      await fetch(`/api/tarefas/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({concluida})
      });
      fetchTarefas();
    }



//constagem de Tarefas concluida
    const contagemTarefasConcluidas = tarefas.filter(tarefa => tarefas.concluida).length;
    const contagemTarefasTotal = tarefas.length;

    return(
        <div>
            <h1>Lista de Tarefa</h1>
            <input type="text" 
            value={novaTarefa} 
            onChange={(e)=> setNovaTarefa(e.target.value)}/>
            <button onClick={addTarefa}>Adicionar</button>
            <ul>
                {tarefas.map((tarefa)=>(
                    <li key={tarefa._id}>
                        {tarefa.titulo} - {tarefa.concluida ? "Concluida" : "Pendente"}
                        {/* <input type="checkbox" 
                        checked = {tarefa.concluida} 
                        onChange={()=>updateTarefa(tarefa.id,tarefa.completed)} /> */}
                        <button onClick={()=>deleteTarefa(tarefa._id)}>Deletar</button>
                    </li>
                ))}
            </ul>
            <div>
              <p>Total de tarefas: {contagemTarefasTotal}</p>
              <p>Tarefas concluídas: {contagemTarefasConcluidas}</p>
            </div>

        </div>
    );