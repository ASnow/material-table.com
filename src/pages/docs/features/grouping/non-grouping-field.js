class NonGroupingField extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Non Grouping Field Preview"
        columns={[
          { title: 'Name', field: 'name', grouping: false },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        options={{
          grouping: true
        }}
      />
    )
  }
}