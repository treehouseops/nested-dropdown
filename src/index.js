import React from 'react'
import PropTypes from 'prop-types'

class NestedDropdown extends React.Component {
  render() {
    return <span>Hello</span>
  }
}
NestedDropdown.propTypes = {
  items: PropTypes.array.isRequired,
  selection: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  unselectItem: PropTypes.func.isRequired,
  loadingItems: PropTypes.bool,
  loadingComponent: PropTypes.func
}

export default NestedDropdown
