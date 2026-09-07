import AgentValorant from "./components/User";
import "./App.css";

interface Agent {
  id: number;
  firstName: string;
  image: string;
}

function App() {
  const agents: Agent[] = [
    { id: 1, firstName: "Raze", image: "https://i.imgur.com/hiuGumq.png" },
    { id: 2, firstName: "Neon", image: "https://i.imgur.com/at4Vde4.png" }, 
    { id: 3, firstName: "Jett", image: "https://i.imgur.com/9ol5pap.png" },
    { id: 4, firstName: "Omen", image: "https://i.imgur.com/FUKpAru.png" }    
  ];

  return (
    <main>
      <h1>Défi Final - Atelier React</h1>
      <h2>Agents Valorant</h2>
      <h3>Choisis l'agent que tu préfères jouer :</h3>

      <div className="agents-container">
        {agents.map((agent) => (
          <AgentValorant
            key={agent.id}
            firstName={agent.firstName}
            image={agent.image}
          />
        ))}
      </div>
    </main>
  );
}

export default App;