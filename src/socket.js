import io from 'socket.io-client';
import { defaultProtocol, defaultPath, defaultPort } from './constants';

export let socket = null;
export default function socketInit(port = defaultPort) {
    if (typeof port !== 'number') return;
    socket = io(`${defaultProtocol}${defaultPath}:${port}`);
}
