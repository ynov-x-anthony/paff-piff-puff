import { useState } from "react";

function AgentValorant({ firstName, lastName, age }: { firstName: string; lastName: string; age: number }) {
  const [points, setPoints] = useState(0);

  return (
    <section>
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Points: {points}</p>
      <button onClick={() => setPoints(points + 1)}>
        Ajouter un point
      </button>
    </section>
  );
}

export default AgentValorant;