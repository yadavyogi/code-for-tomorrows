import {useState} from "react" ;
import Folder from "./components/Folder" ;
import useExplorer from "./components/useExploreTree" ;
export default function App () {
  const [explorerData, setExplorerData] = useState(explorer) ;
  const {insertNode} = useExploreTree() ;
  const handleInsertNode = (folder, item, isFolder) => {
    const finalTree = insertNode(explorerData, folder, item, isFolder) ;

  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      
    </div>
  )
}