import * as React from 'react'
import { Draft, produce } from 'immer'
import './App.css'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { FastField, Formik } from 'formik'

interface SelectedTrimMap {
  [model: string]: {
    [trim: string]: boolean
  }
}

function App() {
  const [models, setModels] = React.useState({
    byID: {
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
      'information': {
        name: 'information'
      },
    },
    allIDs:[
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
      'information'
    ]
  })
  const [trims, setTrims] = React.useState([
    1,2,3,4,5,6,7,8,9,10
  ])

  const [selectedTrims, setSelectedTrims] = React.useState<SelectedTrimMap>({})

  const handleSelectTrim = (
    e: React.ChangeEvent<HTMLInputElement>,
    modelID: string,
    trimID: number
  )=>{
    if(e.target.checked){
      const nextState = produce(selectedTrims, (draft: Draft<SelectedTrimMap>) => {
        if(!draft[modelID]){
          draft[modelID] = {}
        }
        if(!draft[modelID][trimID]){
          draft[modelID][trimID] = true
        }
      })
      setSelectedTrims(nextState);
    } else {
      const nextState = produce(selectedTrims, (draft: Draft<SelectedTrimMap>) => {
        if(draft[modelID][trimID]){
          delete draft[modelID][trimID]
        }
      })
      setSelectedTrims(nextState);
    }
  }

  const isTrimChecked = (
    modelID: string,
    trimID: number
  )=>{
    if(selectedTrims?.[modelID]?.[trimID]) {
      return true;
    }
    return false;
  }

  return (
    <div className='container mx-auto pt-4'>
      <div className='bg-white rounded  shadow'>
        {/* <table className='table-fixed'> */}
        <h2 className='p-4 text-2xl border-b-green-500 border-b-4'>
          Model Trims
        </h2>
        <div className="p-4">
<Formik
  initialValues={{}}
  onSubmit={()=>{}}
>
  {({})=>(
    <form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Model
            </TableCell>
            <TableCell
              colSpan={10}
            >
              Trims
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {models.allIDs.map((id)=>{
            return (
              <TableRow
                key={id}
              >
                <TableCell>
                  {id}
                </TableCell>
                {trims.map((trimID)=>{
                  return <TableCell key={trimID}>
                    <FastField
                      onChange={(e)=>{
                        handleSelectTrim(e, id, trimID)
                      }}
                      checked={isTrimChecked(id, trimID)}
                    >
                      {({ field, form, meta })=>{
                        return (
                          <input
                            type='checkbox'
                            {...field}
                          />
                        )
                      }}
                    </FastField>
                  </TableCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </form>
  )}
</Formik>
        </div>
      </div>
    </div>
  )
}

export default App
