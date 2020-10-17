import React from "react";
import MaterialTable, { Column } from "material-table";
import UpdateSourceSelector from "../UpdateSourceSelector";

interface Row {
  name: string;
  status: string;
  addonVersion: string;
  gameVersion: string;
  author: string;
  updateSource: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function Mtable() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "Addon", field: "name" },
      { title: "Status", field: "status" },
      { title: "Latest Version", field: "addonVersion" },
      {
        title: "Game Version",
        field: "gameVersion",
      },
      {
        title: "Author",
        field: "author",
      },
      {
        title: "Update Source",
        field: "updateSource",
        render: (rowData) => (
          <>
            <UpdateSourceSelector data={rowData.updateSource} />
          </>
        ),
      },
    ],
    data: [
      {
        name: "Altoholic",
        status: "Up to Date",
        addonVersion: "Altoholic 9.0 Stub.zip",
        gameVersion: "8.3.0",
        author: "thaokyaltoholic",
        updateSource: "wowi",
      },
      {
        name: "SpartanUI",
        status: "Up to Date",
        addonVersion: "SpartanUI-6.0.8.zip",
        gameVersion: "9.0.1",
        author: "wutname1",
        updateSource: "curse",
      },
    ],
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      options={{ emptyRowsWhenPaging: false, paging: false }}
    />
  );
}
