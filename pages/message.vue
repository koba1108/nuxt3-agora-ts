<script setup lang="ts">
import {Ref, ref, computed} from "@vue/reactivity";
import {useChatRoom} from '~/composables'
import {Message, MessageSortables, AllMessageSortables, OrderBy, AllOrderBy} from '~/types'

const {messages, add, clear} = useChatRoom()
const username: Ref<string> = ref('ユーザー1')
const text: Ref<string> = ref('')
const orderBy: Ref<OrderBy> = ref('asc')
const sortBy: Ref<MessageSortables> = ref('createdAt')
const addMessage = () => {
  add(username.value, text.value)
  text.value = ''
}
const datetimeToString = (datetime: Date) => {
  const date = datetime.toLocaleDateString()
  const time = datetime.toLocaleTimeString()
  return `${date} ${time}`
}
const _sort = (a: Message, b: Message) => {
  switch (orderBy.value) {
    case 'asc':
      return a[sortBy.value] > b[sortBy.value] ? 1 : -1
    case 'desc':
      return a[sortBy.value] < b[sortBy.value] ? 1 : -1
  }
}
const sortMessages = computed(() => {
  return messages.value.map(m => m).sort(_sort)
})
</script>
<template>
  <div>
    <div>
      <h3>チャット</h3>
      <select v-model="orderBy">
        <option v-for="oo in AllOrderBy" :key="oo">{{ oo }}</option>
      </select>
      <select v-model="sortBy">
        <option v-for="so in AllMessageSortables" :key="so">{{ so }}</option>
      </select>
    </div>
    <div>
      <h3>メッセージ一覧</h3>
      <ul v-for="m in sortMessages" :key="m.id">
        <li>{{ m.username }}:「{{ m.text }}」（{{ datetimeToString(m.createdAt) }}）</li>
      </ul>
    </div>
    <div>
      <label>ユーザー名</label>
      <input type="text" v-model="username" placeholder="ユーザー名">
      <label>テキスト</label>
      <input type="text" v-model="text" placeholder="テキスト">
      <button :disabled="!text || !username" @click="addMessage">追加する</button>
      <button @click="clear">初期化する</button>
    </div>
    <nuxt-link to="/">TOPへ</nuxt-link>
  </div>
</template>
