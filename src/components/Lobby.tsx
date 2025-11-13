import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface LobbyProps {
  onMatchStart: (matchId: string) => void;
}

const Lobby: React.FC<LobbyProps> = ({ onMatchStart }) => {
  const [status, setStatus] = useState('Conectando...');

  useEffect(() => {
    // Conectamos DENTRO del useEffect para evitar duplicados
    const newSocket: Socket = io('http://localhost:4000');

    newSocket.on('connect', () => {
      setStatus('Esperando partida...');
      
      // CORRECCIÓN AQUÍ:
      // socket.id puede ser undefined. Usamos "||" para evitar el error.
      const safeId = newSocket.id || 'unknown'; 

      newSocket.emit('lobby_join', { 
        userId: `user_${safeId}`, 
        displayName: `Jugador-${safeId.slice(0, 4)}` 
      });
    });

    newSocket.on('match_start', (data: any) => {
      console.log('Partida iniciada:', data);
      onMatchStart(data.matchId);
    });

    // Limpieza: Desconectar al desmontar el componente
    return () => {
      newSocket.disconnect();
    };
  }, [onMatchStart]); // Añadimos la dependencia

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{status}</h2>
      <p>⏳ Buscando rival...</p>
    </div>
  );
};

export default Lobby;