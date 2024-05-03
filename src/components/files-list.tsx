import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function FilesList() {
  return (
    <div className="flex flex-col bg-sky-950 w-full text-slate-200">
      <div className="w-full p-5">
        <h1 className="text-2xl font-bold">Files</h1>
      </div>
      <SimpleTreeView
        aria-label="file system navigator"
        sx={{ height: 200, flexGrow: 1, maxWidth: 400, overflowY: "auto"}}
      >
        <TreeItem itemId="2" label="Calendar" />
        <TreeItem itemId="1" label="Applications">
          <TreeItem itemId="2" label="Calendar" />
        </TreeItem>
        <TreeItem itemId="5" label="Documents">
          <TreeItem itemId="10" label="OSS" />
          <TreeItem itemId="6" label="MUI">
            <TreeItem itemId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </SimpleTreeView>
    </div>
  );
}
