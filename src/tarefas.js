// Gerenciador de tarefas simples

// Lista inicial de tarefas
const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", concluida: false, dataCriacao: new Date() },
    { id: 2, titulo: "Fazer exercícios", concluida: true, dataCriacao: new Date() },
    { id: 3, titulo: "Ler um livro", concluida: false, dataCriacao: new Date() }
  ];
  
  // Adiciona uma nova tarefa
  function adicionarTarefa(titulo) {
    const novaTarefa = {
      id: tarefas.length + 1,
      titulo: titulo,
      concluida: false,
      dataCriacao: new Date()
    };
    tarefas.push(novaTarefa);
    console.log(`✅ Tarefa adicionada: "${titulo}"`);
  }
  
  // Marca uma tarefa como concluída
  function concluirTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
      console.log(`✔️ Tarefa concluída: "${tarefa.titulo}"`);
    } else {
      console.warn(`❌ Tarefa com ID ${id} não encontrada.`);
    }
  }
  
  // Lista todas as tarefas
  function listarTarefas() {
    console.log("\n📋 Lista de Tarefas:");
    tarefas.forEach(t => {
      console.log(`#${t.id} - ${t.titulo}`);
      console.log(`   Concluída: ${t.concluida ? "Sim" : "Não"}`);
      console.log(`   Criada em: ${t.dataCriacao.toLocaleString()}`);
    });
  }
  
  // Lista somente tarefas pendentes
  function listarPendentes() {
    const pendentes = tarefas.filter(t => !t.concluida);
    console.log("\n🕗 Tarefas Pendentes:");
    if (pendentes.length === 0) {
      console.log("Nenhuma tarefa pendente! 🎉");
    } else {
      pendentes.forEach(t => {
        console.log(`#${t.id} - ${t.titulo}`);
      });
    }
  }
  
  // --- Executando os métodos para teste ---
  listarTarefas();
  adicionarTarefa("Aprender Node.js");
  concluirTarefa(1);
  listarTarefas();
  listarPendentes();
  