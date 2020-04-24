import { r as registerInstance, c as createEvent, h } from './index-2650486f.js';

const MyProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.consumers = [];
        this.mountEmitter = createEvent(this, "sq-stencil:mountConsumer", 7);
    }
    watchContext(newContext) {
        this.consumers.forEach((consumer) => consumer(newContext));
    }
    async mountConsumer(event) {
        // This supports nested providers by preventing parent elements from receing the request to subscribe
        event.stopPropagation();
        this.consumers = [...this.consumers, event.detail];
        await event.detail(this.sq_state);
        this.consumers = removeElement(this.consumers, event.detail);
    }
    componentDidUnload() {
        // When a component unloads, it passes off responsibility to it's parent enclosing elements
        this.consumers.map((consumer) => this.mountEmitter.emit(consumer));
    }
    render() {
        return h("slot", null);
    }
    static get watchers() { return {
        "sq_state": ["watchContext"]
    }; }
};
function removeElement(arr, element) {
    const index = arr.indexOf(element);
    const newArr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
    return newArr;
}

export { MyProvider as sqh_provider };
