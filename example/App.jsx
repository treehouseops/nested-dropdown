import React from 'react'
import NestedDropdown from '../src/index'

const sampleItems = [
]

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
        this.selection.push(item)
        if(!item.leaf)
            this.loadItems()
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems() {
        this.setState({loadingItems: true, items: []})
    }

    render() {
        return <NestedDropdown items={this.state.items}
                    loadingItems={this.state.loadingItems}
                    selection={this.state.selection} />
    }
}
