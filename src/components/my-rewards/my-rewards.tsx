import {
    Component,
    Prop,
    h,
    Element,
    State,
    Event,
    EventEmitter,
    Host,
  } from "@stencil/core";
  import jsonata from "jsonata";
  
  @Component({
    tag: "my-rewards",
    shadow: true,
  })
  export class MyRewards {
    /**
     * The first name
     */
    @Prop() jsonata: string = "$";
    @Prop() data: any;
    @Element() el: HTMLElement;
  
    @Event({ eventName: "sq-stencil:mountConsumer" }) mountEmitter: EventEmitter;
    @State() promise: Promise<any>;
    @State() resolvePromise: any;
  
    constructor() {
      this.promise = new Promise((resolve) => {
        this.resolvePromise = resolve;
      });
    }
  
    setContext = async (context: any) => {
      this.data = context;
      return this.promise;
    };
  
    componentWillLoad() {
      this.mountEmitter.emit(this.setContext);
    }
  
    componentDidUnload() {
      this.resolvePromise();
    }
  
    render() {
      const expr = jsonata(this.jsonata);
      return <Host>{expr.evaluate(this.data)}</Host>;
    }
  }