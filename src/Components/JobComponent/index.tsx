import React, { useEffect, useState } from "react";

import "./index.css"
import { Link } from "react-router-dom";
import { IJobsProps } from "../../api/fakedata";
import ButtonComponent from "../Button";
import { updateStatus } from "../../api";

interface IProps {
  data: IJobsProps
}

const JobComponent = ({
  data
}: IProps) => {
  // state first
  const [isActive, setIsActive] = useState<boolean>(data.isActive)
  const [details, showDetails] = useState<boolean>(false)

  // useEffect(() => {
  //   setIsActive(data.isActive)
  // },[data])

  // data handling
  const handleUpdateStatus = async (payload: {
    id: number,
    isActive: boolean
  }) => {
    const statusResponse = await updateStatus(payload);
    if(statusResponse) {
      setIsActive(statusResponse.isActive)
    }
  }

  return (
    <>
      <div className={`post-component ${isActive ? 'active' : 'deactivated'}`}>
        <div>
          <h2>{data.title}</h2>
          <p>{data.company}</p>
        </div>
        
          {/* State */}
          {/* <ButtonComponent
            isActive={isActive}
            handleClick={() => {
              setIsActive(!isActive)
            }}
            label={isActive ? "Active" : "Deactivated"} /> */}
            
          {/* Data */}
          <span
            onClick={() => showDetails(!details)}
            className="view">View Details</span>
          {/*  */}
      </div>
      {details &&
        <div className="job-details">
          <b>Description:</b>
          <p>{data.description}</p>

          <ButtonComponent
            isActive={isActive}
            handleClick={() => {
              const payloadData = {
                id: data.id,
                isActive: !isActive
              }
              handleUpdateStatus(payloadData)
            }}
            label={isActive ? "Active" : "Deactivated"} />
        </div>
      }
    </>
  )
}

export default JobComponent