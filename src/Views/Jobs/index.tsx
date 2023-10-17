import React, { useEffect, useState } from "react";
import JobComponent from "../../Components/JobComponent";
import { IJobsProps, jobsData } from "../../api/fakedata";
import { getJobs } from "../../api";

const Jobs = () => {
  
  const [data, setData] = useState<IJobsProps[]>([])

  const getData = async () => {
    // debugger;
    const data = await getJobs()
    console.log(data,'data')
    setData(data)
  }

  useEffect(() => {
    // setData(jobsData)
    getData()
  },[])

  return (
    <div>
      <h1>Available Jobs</h1>
      {data.map( (item: IJobsProps) => {
        return (
          <JobComponent 
            key={item.id}
            data={item}
          />
        )
      })}
    </div>
  )
}

export default Jobs