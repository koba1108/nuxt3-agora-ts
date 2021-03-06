import {readonly, useState} from "#imports";
import {Ref} from "@vue/reactivity";

const increment = (counter: Ref<number>) => () => counter.value++
const decrement = (counter: Ref<number>) => () => counter.value--

export const useCounter = () => {
  const counter = useState('counter', () => (0))
  return {
    counter: readonly(counter),
    increment: increment(counter),
    decrement: decrement(counter),
  }
}
