import {Events} from 'phaser';

class GlobalEventManager extends Events.EventEmitter {}

const eventManager = new GlobalEventManager();

export default eventManager;
