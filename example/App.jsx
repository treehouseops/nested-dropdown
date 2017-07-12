import React from 'react'
import NestedDropdown from '../src/index'
import sampleData from './sampleData.js'

const sampleItems = sampleData()

const Spinner = () => <span>Please wait...</span>

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: [],
      items: [],
      loadingItems: false
    }
    this.selectItem = this.selectItem.bind(this)
  }

  selectItem(item) {
    this.setState({
      selection: this.state.selection.concat([item])
    })
    if(!item.leaf)
      this.loadItems()
  }

  unselectItem() {
    this.setState({
      selection: this.state.selection.slice(0, this.state.selection.length - 1)
    })
    this.loadItems()
  }

  componentDidMount() {
    this.loadItems()
  }

  loadItems() {
    // a fake loading function with a 5 seconds delay
    const children = this.state.selection.length ?
      this.state.selection[this.state.selection.length - 1].children : sampleItems
    if(children) {
      this.setState({loadingItems: true, items: []})
      setTimeout(() => {
        this.setState({
          loadingItems: false,
          items: children
        })
      }, 5000)
    }
  }

  render() {
    return <NestedDropdown items={this.state.items}
      loadingItems={this.state.loadingItems}
      loadingComponent={Spinner}
      selectItem={this.selectItem}
      unselectItem={this.unselectItem}
      selection={this.state.selection} />
  }
}
export default App
