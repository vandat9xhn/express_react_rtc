import { io } from 'socket.io-client';

const getSocket = () => io('http://localhost:3001');

export { getSocket };
