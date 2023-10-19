import React, { useState } from "react";

import "./index.css"
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
  const handleUpdateStatus = async ({
    id,
    isActive
  }: {
    id: number,
    isActive: boolean
  }) => {
    const payload = {
      id: id,
      isActive: isActive
    }
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
        
        <span
          onClick={() => showDetails(!details)}
          className="view">
            {details ? "View Less" : 'View Details'}
        </span>
      </div>

      {details &&
        <div className="job-details">
          <b>Description:</b>
          <p>{data.description}</p>

          <ButtonComponent
            isActive={isActive}
            handleClick={() => {
              handleUpdateStatus({
                id: data.id,
                isActive: !isActive
              })
            }}
            label={isActive ? "Deactivate?" : "Activate?"} />
        </div>
      }
    </>
  )
}

export default JobComponent