import React from "react";
import Label from "../Label";

export default function ContactInput(props) {
  const { contact, onChange } = props;
  const { name = "", email = "", phone = "", apartment = "" } = contact;
  return (
    <div className="mv4">
      <div className="flex flex-wrap">
        <div className="w-50-ns w-100 pr2-ns mt0-ns mt3">
          <Label label="Full name" htmlFor="name" />
          <input
            id="name"
            className="db w-100 pa2 border-box ba b--gray mt2"
            required={true}
            value={name}
            onChange={({ target }) => onChange("name", target.value)}
          />
        </div>
        <div className="w-50-ns w-100 pl2-ns mt0-ns mt3">
          <div>
            <Label label="Apartment" htmlFor="apartment" />
            <span className="ml1 gray">(optional)</span>
          </div>
          <input
            id="apartment"
            className="db w-100 pa2 border-box ba b--gray mt2"
            value={apartment}
            onChange={({ target }) => onChange("apartment", target.value)}
          />
        </div>
        <div className="w-50-ns w-100 pr2-ns mt3">
          <Label label="Email address" htmlFor="email" />
          <input
            id="email"
            className="db w-100 pa2 border-box ba b--gray mt2"
            type="email"
            required={true}
            value={email}
            onChange={({ target }) => onChange("email", target.value)}
          />
        </div>
        <div className="w-50-ns w-100 pl2-ns mt3">
          <Label label="Phone number" htmlFor="phone" />
          <input
            id="phone"
            className="db w-100 pa2 border-box ba b--gray mt2"
            type="tel"
            required={true}
            value={phone}
            onChange={({ target }) => onChange("phone", target.value)}
          />
        </div>
      </div>
    </div>
  );
}
