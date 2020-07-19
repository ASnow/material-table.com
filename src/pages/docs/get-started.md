# Get Started

[![Build Status](https://travis-ci.org/mbrn/material-table.svg?branch=master)](https://travis-ci.org/mbrn/material-table)
[![npm package](https://img.shields.io/npm/v/material-table/latest.svg)](https://www.npmjs.com/package/material-table)
[![NPM Downloads](https://img.shields.io/npm/dt/material-table.svg?style=flat)](https://npmcharts.com/compare/material-table?minimal=true)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/mbrn/material-table.svg)](http://isitmaintained.com/project/mbrn/material-table "Average time to resolve an issue")
[![Follow on Twitter](https://img.shields.io/twitter/follow/baranmehmet.svg?label=follow+baranmehmet)](https://twitter.com/baranmehmet)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/material-table/Lobby)

material-table is a simple and powerful Datatable for React based on Material-UI Table with some additional features.

## Key features

* [Actions](/docs/features/actions)
* [Component overriding](/docs/features/component-overriding)
* [Custom column rendering](/docs/features/custom-column-rendering)
* [Detail Panel](/docs/features/detail-panel)
* [Editable](/docs/features/editable)
* [Export](/docs/features/export)
* [Filtering](/docs/features/filtering)
* [Grouping](/docs/features/grouping)
* [Localization](/docs/features/localization)
* [Remote Data](/docs/features/remote-data)
* [Search](/docs/features/search)
* [Selection](/docs/features/selection)
* [Sorting](/docs/features/sorting)
* [Styling](/docs/features/styling)
* [Tree Data](/docs/features/tree-data)
* [Validation](/docs/features/validation)
* and more

## Usage

``` jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Demo Title"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-div'));
```

## Contributing

We'd love to have your helping hand on `material-table` ! See [CONTRIBUTING.md](https://github.com/mbrn/material-table/blob/master/.github/CONTRIBUTING.md) for more information on what we're looking for and how to get started.

If you have any sort of doubt, idea or just want to talk about the project, feel free to join [our chat on Gitter](https://gitter.im/material-table/Lobby) :)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
