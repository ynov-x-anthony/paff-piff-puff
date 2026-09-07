import StudentCard from "./components/User";

function App() {
  const agents = [
    { id: 1, firstName: "David", lastName: "Gomez", age: 20 },
    { id: 2, firstName: "Gabriel", lastName: "Piras", age: 18 }
  ];

  return (
    <main>
      <h1>Défi Final</h1>
      {agents.map((agent) => (
        <AgentValorant
          key={agent.id}
          firstName={agent.firstName}
          lastName={agent.lastName}
          age={agent.age}
        />
      ))}
    </main>
  );
}

export default App;