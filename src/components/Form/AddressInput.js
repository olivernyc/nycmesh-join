import React, { useState, useEffect } from "react";
import Autocomplete from "react-autocomplete";
import Label from "../Label";

export default function AddressInput(props) {
  const { address, onChange, onSelect } = props;
  const [suggestions, setSuggestions] = useState({});

  useEffect(() => {
    async function fetchSuggestions() {
      if (!address) return;
      const URL = `https://geosearch.planninglabs.nyc/v1/autocomplete?text=${address}`;
      const res = await fetch(URL);
      const json = await res.json();
      const { features } = json;
      setSuggestions(suggestions => ({
        ...suggestions,
        [address]: features.slice(0, 5)
      }));
    }
    fetchSuggestions();
  }, [address]);

  let input;

  return (
    <div className="mv4">
      <Label label="Building address" htmlFor="address" />
      <Autocomplete
        ref={element => {
          input = element;
        }}
        value={address}
        items={suggestions[address] || []}
        getItemValue={item => item.properties.id}
        wrapperStyle={{ width: "100%" }}
        menuStyle={{
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
          background: "rgba(255, 255, 255, 0.9)",
          position: "absolute",
          zIndex: 9,
          overflow: "auto",
          maxHeight: "50%", // TODO: don't cheat, let it flow to the bottom
          borderRadius: "0.5rem"
        }}
        renderInput={props => {
          return (
            <input
              id="address"
              className="usa-input w-100 pa2 border-box ba b--gray mt2"
              autoComplete="nope"
              spellCheck="false"
              {...props}
            />
          );
        }}
        renderItem={(item, isHighlighted) => {
          const { name, borough, locality, postalcode } = item.properties;
          const address1 = titleCase(name);
          const address2 = `${borough}, ${locality} ${postalcode}`;
          return (
            <div
              key={item.properties.id}
              className="pa3 bb b--light-gray pointer bg-white"
              style={{ backgroundColor: isHighlighted ? "#f5f5f5" : "#fff" }}
            >
              <span>{address1} </span>
              <span className="gray">{address2}</span>
            </div>
          );
        }}
        onChange={({ target }) => onChange(target.value)}
        onSelect={(value, { geometry, properties }) => {
          input.blur();

          const { coordinates } = geometry;
          const [lat, lng] = coordinates;
          const {
            borough,
            housenumber,
            locality,
            name,
            pad_bbl,
            pad_bin,
            postalcode,
            street
          } = properties;
          const address = `${titleCase(
            name
          )}, ${borough}, ${locality} ${postalcode}`;

          onSelect({
            address,
            borough,
            housenumber,
            lat,
            lng,
            postalcode,
            street,
            bin: pad_bin,
            bbl: pad_bbl
          });
        }}
      />
    </div>
  );
}

function titleCase(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}
