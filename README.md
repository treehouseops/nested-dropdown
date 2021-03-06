Provide a way to select an item from a nested list, each level being dynamically loaded.

![Sample Dropdown](https://raw.githubusercontent.com/nicocrm/nested-dropdown/master/sample.png)

Props
-----

 * `items`: a list of current items to make the selection from.  Each item must have the following properties:
    - title: string to display for the item
    - id: a unique identifier for the item
    - leaf: true to signify that the item is a terminal selection - when it is selected the selection panel will close
 * `selection`: an array of currently selected items (the different selected level).  For example if Parent and Child have been selected, this will have an array of `[parent, child]` and the `items` property will be set to the list of grandchildren
 * `selectItem`: a function that will be invoked when the user selects an item.  If the item selection is valid, this should append it to the selection array and load the child items (if the item is not a leaf)
 * `unselectItem`: remove the last selected item from the selection and reload the list of items for the parent
 * `loadingItems`: a boolean to signify that the `items` list is currently loading
 * `loadingComponent`: a React component to be rendered in the panel when the items are loading

Example
-------

```
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
    //else
      // something to send the selection to the parent component?
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
    // ... something to load the items
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
```
