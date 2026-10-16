import { useState } from "react"

const student=[
  {id:1,name:"Rahul",course:"BCA",marks:79},
  {id:2,name:"Priya",course:"BTech",marks:90},
  {id:3,name:"Aman",course:"BCA",marks:54},
  {id:4,name:"Simran",course:"MCA",marks:82},
  {id:5,name:"Neha",course:"BTech",marks:60},
  {id:6,name:"Rohit",course:"MCA",marks:35}
]

function App(){
  const[search,setSearch]=useState("")
  const[course,setCourse]=useState("All")
  const[sort,setSort]=useState("name")


  let result=student.filter((s)=>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  if(course!="All"){
    result=result.filter((student)=>{
      return student.course==course
    })
  }


  result=[...result].sort((a,b)=>{
    if(sort=="name"){
      return a.name.localeCompare(b.name);
    }
    else if(sort=="marks-low"){
      return a.marks-b.marks
    }
    else{
      return b.marks-a.marks
    }
  })

  return(
    <div>
      <input type="text" 
      placeholder="Search Students... " 
      value={search} 
      onChange={(e)=>setSearch(e.target.value)}
      />

      <select value={course} onChange={(e)=>setCourse(e.target.value)}>
        <option value="All">All</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="BTech">BTech</option>
      </select>

      <select value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="marks-low">marks-low</option>
        <option value="marks-high">marks-high</option>
      </select>

      {
        result.map((s)=>{
          return <div>
            <p>
              Name : {s.name} | Course : {s.course} |
              Marks : {s.marks}
            </p>
          </div>
        })
      }
    </div>
  )
}

export default App