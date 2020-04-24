import { r as registerInstance, h, g as getElement } from './index-2650486f.js';

const myComponentCss = ":host{display:block}";

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
const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.page = 1;
    }
    render() {
        const template = this.element.querySelector("template");
        const pageRefs = this.page == 1 ? referrals : referrals2;
        return (h("div", null, h("h2", null, "My Referrals"), pageRefs.map((ref) => {
            return (
            // @ts-ignore
            h("sqh-provider", { sq_state: ref, innerHTML: template.innerHTML }));
        }), h("button", { onClick: () => {
                this.page = 1;
            }, disabled: this.page === 1 }, "Previous"), h("button", { onClick: () => (this.page = 2), disabled: this.page === 2 }, "Next"), h("div", null, "Page: ", this.page)));
    }
    get element() { return getElement(this); }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
