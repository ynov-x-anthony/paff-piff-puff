import { useState } from "react";

interface AgentProps {
  firstName: string;
  image: string;
}

function AgentValorant({ firstName, image }: AgentProps) {
  const [points, setPoints] = useState(0);
  const handleAddPoint = () => {
    setPoints(points + 1);
  };

  return (
    <section className="agent-card">
      <h2>{firstName}</h2>
      <img src={image} alt={firstName} />
      <p>👍 Points : {points}</p>
      <button onClick={handleAddPoint}>
        Ajouter un point
      </button>
    </section>
  );
}

export default AgentValorant;