
import UseCSV from "@usecsv/react";

import Handler from '../pages/api/webhook'

export default function Home() {
  return (
 <div>
  <h1>Hello User pleace upload file</h1>
    <UseCSV importerKey="cb6581dc-a874-4498-b1a7-2cd66907ceb8" >
    import data 
    </UseCSV>

    <div>
      {/* <Handler/> */}
    </div>
 </div>
  )
}
