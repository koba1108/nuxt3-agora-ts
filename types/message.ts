export interface Message {
  id: string
  username: string
  text: string
  createdAt: Date
  updatedAt: Date
}

export type MessageSortables = 'id' | 'username' | 'createdAt' | 'updatedAt'
export const AllMessageSortables = [
  'id',
  'username',
  'createdAt',
  'updatedAt',
] as const
