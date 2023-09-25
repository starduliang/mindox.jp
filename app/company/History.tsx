import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import useNState from '@/components/hooks/useNState'

type DataType = {
  title: string
  subtitle: string
  items: {
    yearMonth: string
    event: string
  }[]
}

const data: DataType = {
  title: 'History',
  subtitle: '沿革',
  items: [
    { yearMonth: '2023.3', event: '社員採用' },
    { yearMonth: '2022.9', event: '会社設立' }
  ]
}

const History = (): JSX.Element => {
  const { state } = useNState<DataType>(data)

  return (
    <div>
      <h1 className="text-center text-7xl font-bold">{state.title}</h1>
      <h2 className="mt-4 text-center text-lg">{state.subtitle}</h2>
      <Timeline position="alternate">
        {state.items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot className="border-2 border-current bg-transparent" />
              {index < state.items.length - 1 && (
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
              <div className="p-6 mb-1 --border bg-transparent rounded text-center">
                <p className="text-2xl md:text-3xl">{item.yearMonth}</p>
                <p className="text-sm md:text-base mt-2">{item.event}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export default History
