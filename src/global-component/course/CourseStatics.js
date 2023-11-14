// ** MUI Imports
import React, { useEffect, useState, useRef } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// ** API
import CourseApi from 'src/api/Course'
const CourseStatics = ({ courseGuid }) => {
  const [subject, setSubject] = useState([])
  // subject length
  const SubjectList = useRef(async () => {
    const res = await CourseApi.getSubjectList(courseGuid)
    setSubject(res.payload.data)
  })
  useEffect(() => {
    SubjectList.current()
  }, [])
  // subject length
  const subjectListLength = subject.length
  const [tests, setTests] = useState([])
  // subject length
  const AllTest = useRef(async () => {
    const res = await TestsApi.getAllTest(courseGuid)
    setTests(res.payload.data)
  })
  useEffect(() => {
    AllTest.current()
  }, [])
  // subject length
  const allTestsLength = tests.length
  return (
    <Box>
      {/* {roleObj[row.role].icon} */}
      <a href={`/`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='body2'>
          <h4>Subjects : {subjectListLength}</h4>
        </Typography>
      </a>
      <a href={`/`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='body2'>
          <h4>Tests : {allTestsLength}</h4>
        </Typography>
      </a>
      <a href={`/`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='body2'>
          <h4>Online Class : 5</h4>
        </Typography>
      </a>
      <a href={`/`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='body2'>
          <h4>Enrolment : 20</h4>
        </Typography>
      </a>
    </Box>
  )
}
export default CourseStatics
