import { socketEvents, colors } from './constants';
import { socket } from './socket';
import cookLogPayload from './services/cookLogPayload';

const logger = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data));
};

logger.red = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.RED));
};

logger.pink = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.PINK));
};

logger.purple = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.PURPLE));
};

logger.deep_purple = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.DEEP_PURPLE));
};

logger.indigo = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.INDIGO));
};

logger.blue = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.BLUE));
};

logger.cyan = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.CYAN));
};

logger.teal = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.TEAL));
};

logger.green = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.GREEN));
};

logger.lime = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.LIME));
};

logger.yellow = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.YELLOW));
};

logger.orange = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.ORANGE));
};

logger.grey = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.GREY));
};

logger.white = (...data) => {
    socket.emit(socketEvents.DEBUG_LOG, cookLogPayload(data, colors.WHITE));
};

export default logger;
