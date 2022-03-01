import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'todo',
    headerName: 'To Do',
    width: 300,
    editable: true,
  },
];

const rows = [
  { id: 1, todo: 'E: GIVE DAN VIT.D + PRO.B' },
  { id: 2, todo: 'E: GIVE PIPPIN MEDS' },
  { id: 3, todo: 'E: FEED SOCKBOI' },
  { id: 4, todo: 'K: TAKE MEDS' },
  { id: 5, todo: 'K: TAKE VITAMINS' },
  { id: 6, todo: 'A: WALK WITH DC' },
  { id: 7, todo: 'E: FEED MAIN BABIES DINNER' },
  { id: 8, todo: 'E: FEED SOCKBOI DINNER' },
  { id: 9, todo: 'C: CLEAN LITTER' },
  { id: 10, todo: 'K: DRINK TEA | MIRA + PED' },
  { id: 11, todo: 'E: PREP DAN BFAST' },
  { id: 12, todo: 'E: RUN DISHWASHER' },
  { id: 13, todo: 'B: GRATITUDE JOURNAL' },
  { id: 14, todo: 'B: LAUNDRY' },
  { id: 15, todo: 'B: STERILIZE BOTTLES' },
];

export default function DataTable() {
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <h1>Checklist</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
