import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface State {
  message: string;
}

const Tunnel = createProviderConsumer<State>(
  {
    message: "Hello!",
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);

export default Tunnel;