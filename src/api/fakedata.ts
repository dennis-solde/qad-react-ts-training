export interface IJobsProps {
  id: number
  title: string
  company: string
  description?: string;
  isActive: boolean
}

export const jobsData: IJobsProps[] = [
  {
    "id": 1,
    "title": "Project Manager",
    "company": "QAD Works",
    "isActive": true
  },
  {
    "id": 2,
    "title": "Data Analyst",
    "company": "QAD Works",
    "isActive": true
  },
  {
    "id": 3,
    "title": "QA Engineer",
    "company": "QAD Works",
    "isActive": true
  },
  {
    "id": 4,
    "title": "Data Warehouse Developer",
    "company": "QAD Works",
    "isActive": true
  },
  {
    "id": 5,
    "title": "Full Stack Software Engineer",
    "company": "QAD Works",
    "isActive": true
  },
]