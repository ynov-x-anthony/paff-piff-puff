import { useState } from "react";

function AgentValorant({ firstName, image }: { firstName: string; image: string }) {
  const [points, setPoints] = useState(0);

  return (
    <section>
      <h2>{firstName}</h2>
      <img src={image} alt={firstName} />
      <p>👍: {points}</p>
      <button onClick={() => setPoints(points + 1)}>
        Ajouter un point
      </button>
    </section>
  );
}

export default AgentValorant;