
export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Vehicle Type',
        accessor: 'vehicle_type'

    },
    {
        Header: 'Vehicle Model',
        accessor: 'vehicle_model'

    },
    {
        Header: 'Year of purchase',
        accessor: 'year_of_purchase'

    },
    {
        Header: 'Registeration Number',
        accessor: 'reg_no'

    },
    {
        Header: 'Amount',
        accessor: 'amount'

    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: cell => (
                 <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     backgroundColor: 'rgb(131, 206, 200)',
                     padding: '3px',
                     justifyContent: 'center',
                     borderRadius: '5px',
                     fontSize: '10',
                     color: "#FFF"
                 }}>
                 <span>Success</span>
                 </div>
            )

    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: cell => (
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px'
          }}>
              <button style={{
                  backgroundColor: '#BC1B1B',
                  color: '#fff',
                  outline: 'none',
                  border: 0,
                  borderRadius: '5px',
                  padding: '0 10px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textTransform: "capitalize",
                  width: '47px',
              }}>Delete</button>

              <button style={{
                  color: '#05A850',
                  outline: '#05A850',
                  border: '1px solid #05A850',
                  borderRadius: '5px',
                  padding: '3px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textTransform: "capitalize",
                  width: '47px',

              }}>
                  Edit
                  </button>
          </div>
          )
        

    },
]