import {
  Component,
  Prop,
  h,
  State,
  Watch,
  Event,
  Listen,
  EventEmitter,
} from "@stencil/core";

interface ConsumerEvent extends Event {
  detail: Function;
}
/**
 * Inspired by https://github.com/petermikitsh/stencil-context
 *
 */
@Component({
  tag: "sqh-provider",
})
export class MyProvider {
  @Prop()
  sq_state: any;

  @State() consumers: Function[] = [];

  @Watch("sq_state")
  watchContext(newContext) {
    this.consumers.forEach((consumer) => consumer(newContext));
  }
  @Event({ eventName: "sq-stencil:mountConsumer" }) mountEmitter: EventEmitter;

  @Listen("sq-stencil:mountConsumer")
  async mountConsumer(event: ConsumerEvent) {
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
    return <slot />;
  }
}

function removeElement<T>(arr:T[], element:T) {
  const index = arr.indexOf(element);
  const newArr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
  return newArr;
}
