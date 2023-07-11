import * as React from 'react'
import './App.css'

function App() {
  const [models, setModels] = React.useState({
    byId: {
      'map': {
        name: 'map'
      },
      'internet': {
        name: 'internet'
      },
      'winner': {
        name: 'winner'
      },
      'funeral': {
        name: 'funeral'
      },
      'procedure': {
        name: 'procedure'
      },
      'garbage': {
        name: 'garbage'
      },
      'news': {
        name: 'news'
      },
      'speech': {
        name: 'speech'
      },
      'delivery': {
        name: 'delivery'
      },
      'pollution': {
        name: 'pollution'
      },
    },
    ids:[
      'map',
      'internet',
      'winner',
      'funeral',
      'procedure',
      'garbage',
      'news',
      'speech',
      'delivery',
      'pollution',
    ]
  })
const [trimsByModel, setTrimsByModel] = React.useState({})

  return (
    <div className='container mx-auto pt-4'>
      <div className='bg-white p-4 rounded  shadow'>
        test
      </div>
    </div>
  )
}

export default App
