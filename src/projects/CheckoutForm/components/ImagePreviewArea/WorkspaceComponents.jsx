import React from 'react';
import pluralize from 'pluralize';

const Information = (props) => {
  let duration = pluralize('day', props.duration);
  return (
    <div className="WorkspaceInformation">
      <div className="WorkspaceName">{props.name}</div>
      <div className="WorkspacePrice">
        <div className="Price">${props.price}</div>
        <div className="Duration">/ {duration}</div>
      </div>
    </div>
  );
}

const Meta = (props) => {
  let people = pluralize('person', props.people);
  return (
    <div className="WorkspaceMeta">
      <div className="Description">Rent the entire office for {people}</div>
      <div className="Dates"><strong>Mon. 18 Jan 2017</strong> to <strong>Fri. 20 Jan 2017</strong></div>
    </div>
  );
}

export { Information, Meta }
