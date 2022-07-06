import {readonly, useState} from "#imports";
import {Ref} from "@vue/reactivity";
import {Message} from "~/types";
import UUID from 'uuidjs';

const newMessage = (username: string, text: string): Message => {
  return {
    id: UUID.generate(),
    username,
    text,
    createdAt: new Date().toLocaleString('ja-JP'),
    updatedAt: new Date().toLocaleString('ja-JP'),
  }
}
const add = (messages: Ref<Message[]>) => (username: string, text: string) => messages.value.push(newMessage(username, text))
const set = (messages: Ref<Message[]>) => (msg: Message[]) => messages.value = msg
const clear = (messages: Ref<Message[]>) => () => messages.value = []

export const useChatRoom = (initialState?: Message[]) => {
  const messages = useState<Message[]>('chatRoom', () => (initialState || []));
  return {
    messages: readonly(messages),
    add: add(messages),
    set: set(messages),
    clear: clear(messages),
  }
}
