import DeviceDetector from 'device-detector-js';
import { generate } from 'shortid';
import { eventType, userAgent } from '../constants';

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(userAgent);

export default function cookLogPayload(data, color) {
    return {
        data,
        color,
        id: generate(),
        type: eventType.LOG,
        time: Date.now(),
        device,
    };
}
