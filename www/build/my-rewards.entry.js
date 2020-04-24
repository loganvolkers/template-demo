import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-2650486f.js';
import { j as jsonata } from './jsonata-167099de.js';

const MyRewards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The first name
         */
        this.jsonata = "$";
        this.setContext = async (context) => {
            this.data = context;
            return this.promise;
        };
        this.promise = new Promise((resolve) => {
            this.resolvePromise = resolve;
        });
        this.mountEmitter = createEvent(this, "sq-stencil:mountConsumer", 7);
    }
    componentWillLoad() {
        this.mountEmitter.emit(this.setContext);
    }
    componentDidUnload() {
        this.resolvePromise();
    }
    render() {
        const expr = jsonata(this.jsonata);
        return h(Host, null, expr.evaluate(this.data));
    }
    get el() { return getElement(this); }
};

export { MyRewards as my_rewards };
