import React from "react";

export default function RoofForm(props) {
  const { roofAccess, onChange } = props;
  return (
    <div className="mv4">
      <h2 className="fw5 f5 mv3">Do you have roof access?</h2>
      <fieldset className="usa-fieldset">
        <legend className="usa-sr-only">Roof Access</legend>
        <div className="usa-radio">
          <input
            className="usa-radio__input"
            id="yes"
            type="radio"
            name="roof-access"
            value="yes"
            checked={roofAccess === "yes"}
            onChange={onChange}
          />
          <label className="usa-radio__label" htmlFor="yes">
            Yes
          </label>
        </div>
        <div className="usa-radio">
          <input
            className="usa-radio__input"
            id="no"
            type="radio"
            name="roof-access"
            value="no"
            checked={roofAccess === "no"}
            onChange={onChange}
          />
          <label className="usa-radio__label" htmlFor="no">
            No
          </label>
        </div>
        <div className="usa-radio">
          <input
            className="usa-radio__input"
            id="maybe"
            type="radio"
            name="roof-access"
            value="maybe"
            checked={roofAccess === "maybe"}
            onChange={onChange}
          />
          <label className="usa-radio__label" htmlFor="maybe">
            Maybe
          </label>
        </div>
      </fieldset>
    </div>
  );
}
