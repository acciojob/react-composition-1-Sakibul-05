import React,{useState} from 'react'

const Tabs = ({tabs}) => {
    const [tabClicked, setTabClicked] = useState("")
     


  return (
    <div>
      <ul>
        {
            tabs.map((tab)=>{
                return <li key={tab.content} onClick={()=>setTabClicked(tab.content)}>{tab.title}</li>
            })
        }
      </ul>
      <p>This is the content for {tabClicked}</p>
    </div>
  )
}

export default Tabs