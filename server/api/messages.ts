import {IncomingMessage, ServerResponse} from "h3";
import {Message} from '~/types';

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const placeholderJsonURL = 'https://jsonplaceholder.typicode.com'

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const comments: Comment[] = await $fetch(`${placeholderJsonURL}/comments`, {
      method: 'GET',
      params: {
        _limit: 5,
      }
    })
    return comments.map(comment => commentToMessage(comment))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.statusMessage = 'Internal Server Error'
    res.end()
  }
}

function commentToMessage(comment: Comment): Message {
  return {
    id: comment.id.toString(),
    username: comment.name,
    text: comment.body,
    createdAt: new Date().toLocaleString('ja-JP'),
    updatedAt: new Date().toLocaleString('ja-JP'),
  }
}
