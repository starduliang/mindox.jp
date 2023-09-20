import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'

const History = (): JSX.Element => {
  const timelineData = [
    { yearMonth: '2023.3', event: '社員採用' },
    { yearMonth: '2022.9', event: '会社設立' }
  ]

  return (
    <div>
      <h1 className="text-center text-7xl font-bold"> History</h1>
      <h2 className="mt-4 text-center text-lg">沿革</h2>
      <Timeline position="alternate">
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot className="border-2 border-current bg-transparent" />
              {index < timelineData.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: 'transparent',
                    border: 'none',
                    background: 'linear-gradient(to bottom, transparent 50%, currentColor 50%)',
                    backgroundSize: '1px 6px'
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <div className="p-6 mb-1 border bg-transparent border-[color-border] border-1 rounded text-center">
                <p className="text-3xl">{item.yearMonth}</p>
                <p className="mt-2">{item.event}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default History
