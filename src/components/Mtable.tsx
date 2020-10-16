import React from "react";
import MaterialTable, { Column } from "material-table";

interface Row {
  name: string;
  status: string;
  addonVersion: string;
  gameVersion: string;
  author: string;
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
    ],
    data: [
      {
        name: "Altoholic",
        status: "Up to Date",
        addonVersion: "Altoholic 9.0 Stub.zip",
        gameVersion: "8.3.0",
        author: "thaokyaltoholic",
      },
      {
        name: "Altoholic",
        status: "Up to Date",
        addonVersion: "Altoholic 9.0 Stub.zip",
        gameVersion: "8.3.0",
        author: "thaokyaltoholic",
      },
    ],
  });

  return (
    <MaterialTable
      style={{ height: "100vh" }}
      title="My Addons"
      columns={state.columns}
      data={state.data}
      options={{ pageSize: 10 }}
    />
  );
}
