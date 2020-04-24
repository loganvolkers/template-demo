import { Component, h, Element, State } from "@stencil/core";

const referrals = [
  {
    referrer: { firstName: "sally" },
    referred: { firstName: "bob" },
  },
  {
    referrer: { firstName: "Jimmy" },
    referred: { firstName: "Jonny" },
  },
  {
    referrer: { firstName: "Sonny" },
    referred: { firstName: "Silly" },
  },
];

const referrals2 = [
  {
    referrer: { firstName: "Cobey" },
    referred: { firstName: "Coleton" },
  },
  {
    referrer: { firstName: "Justin" },
    referred: { firstName: "Jorge" },
  },
];

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
})
export class MyComponent {
  @Element() element: HTMLElement;
  @State() page = 1;

  render() {
    const template = this.element.querySelector("template");
    const pageRefs = this.page == 1 ? referrals : referrals2;
    return (
      <div>
        <h2>My Referrals</h2>
        {pageRefs.map((ref) => {
          return (
            // @ts-ignore
            <sqh-provider
              sq_state={ref}
              innerHTML={template.innerHTML}
            ></sqh-provider>
          );
        })}

        <button
          onClick={() => {
            this.page = 1;
          }}
          disabled={this.page === 1}
        >
          Previous
        </button>
        <button onClick={() => (this.page = 2)} disabled={this.page === 2}>
          Next
        </button>
        <div>Page: {this.page}</div>
      </div>
    );
  }
}
