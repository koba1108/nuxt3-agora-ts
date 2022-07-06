import {readonly, useState} from "#imports";
import {Ref} from "@vue/reactivity";
import {Message} from "~/types";
import UUID from 'uuidjs';

const newMessage = (username: string, text: string): Message => {
  return {
    id: UUID.generate(),
    username,
    text,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}
const add = (messages: Ref<Message[]>) => (username: string, text: string) => {
  if (username && text) {
    messages.value.push(newMessage(username, text));
  }
}
const clear = (messages: Ref<Message[]>) => () => messages.value = []

export const useChatRoom = (initialState?: Message[]) => {
  const messages = useState<Message[]>('chatRoom', () => (initialState || []));
  return {
    messages: readonly(messages),
    add: add(messages),
    clear: clear(messages),
  }
}
