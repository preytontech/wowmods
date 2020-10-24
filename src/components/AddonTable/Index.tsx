import React from "react";
import MaterialTable, { Column } from "material-table";
import UpdateSourceSelector from "./UpdateSourceSelector";

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
  const state: TableState = {
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
        name: "Bartender4",
        status: "Up to Date",
        addonVersion: "Bartender4-4.10.2.zip",
        gameVersion: "9.0.1",
        author: "nevcairiel",
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
  };

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      style={{ backgroundColor: "unset" }}
      options={{ emptyRowsWhenPaging: false, paging: false }}
    />
  );
}
