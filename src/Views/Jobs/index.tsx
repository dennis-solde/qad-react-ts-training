import React, { useEffect, useState } from "react";
import JobComponent from "../../Components/JobComponent";
import { IJobsProps } from "../../api/fakedata";
import { getJobs } from "../../api";

const Jobs = () => {
  
  const [data, setData] = useState<IJobsProps[]>([])

  const getData = async () => {
    // debugger;
    const data = await getJobs()
    setData(data)
  }

  useEffect(() => {
    getData()

    return () => {
      // clean up state
      setData([])
    };
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