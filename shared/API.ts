interface API extends API_Event {}

export interface API_Event {
  createInquiry: (req: { name: string }, res: { name: string }) => Promise<any>
}

export default API
