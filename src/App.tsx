import React, { useState } from 'react';
import Lobby from './components/Lobby';
import { Game } from './components/Game';
import Scoreboard from './components/Scoreboard';

const App: React.FC = () => {
  const [matchId, setMatchId] = useState<string | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);

  if (!matchId || !playerId) {
    return (
      <Lobby
        onMatchStart={(id) => {
          setMatchId(id);
          setPlayerId(`user_${id}`); // simplificado, igual que antes
        }}
      />
    );
  }

  return (
    <div>
      <Game matchId={matchId} playerId={playerId} />
      <Scoreboard />
    </div>
  );
};

export default App;
