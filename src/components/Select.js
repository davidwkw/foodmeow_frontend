import React, { Component } from 'react';
import MultiSelectReact from 'multi-select-react';

class MultiSelect extends Component {
  constructor() {
    super();
    this.state = {
      multiSelect: [{ label: 'Chinese', value: true },
                    { label: 'Malaysian' },
                    { label: 'Cafes' },
                    { label: 'Japanese' },
                    { label: 'Asian Fusion' },
                    { label: 'Indian' },
                    { label: 'Thai' },
                    { label: 'Seafood' },
                    { label: 'Korean' },
                    { label: 'Bars' },
                    { label: 'Noodles' },
                    { label: 'Italian' },
                    { label: 'Burgers' },
                    { label: 'Breakfast' },
                    { label: 'Desserts' },
                  
                  ],
    };
  }

  render() {
    const selectedOptionsStyles = {
      color: '#3c763d',
      backgroundColor: '#dff0d8',
    };
    const optionsListStyles = {
      backgroundColor: '#fcf8e3',
      color: '#8a6d3b',
    };
    return (
      <div style={{ width: '627px' }} >
        <MultiSelectReact 
        className="browser-default custom-select"
          options={this.state.multiSelect}
          optionClicked={this.optionClicked.bind(this)}
          selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles}
          
        />
      </div>
    );
  }

  optionClicked(optionsList) {
    console.log(
      'here the lib adds value false to the selected item',
      optionsList
    );
    this.setState({ multiSelect: optionsList });
  }
  selectedBadgeClicked(optionsList) {
    console.log(
      'here the lib adds value true to the selected item',
      optionsList
    );
    this.setState({ multiSelect: optionsList });
  }
}

export default MultiSelect;
