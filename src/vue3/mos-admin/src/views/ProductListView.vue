<template>
  <div>
    <div class="title">
      <h6 class="title-name1">ハンバーガー注文 商品一覧</h6>
      <h6 class="title-name2">ユーザー名</h6>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th class="sub-title1">
            操作&emsp;<button class="btn btn-custom" @click="onadd">新規作成</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td class="btn4">
            <button class="btn btn-primary" @click="onedit(product)">編集</button>
            <button class="btn btn-danger" @click="ondelete(product)">削除</button>
            <button class="btn btn-secondary" @click="onup(product)">上へ</button>
            <button class="btn btn-secondary" @click="ondown(product)">下へ</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-primary" @click="onload">読み込み</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([
  { id: 1, name: 'product 1' }
  // Add more products here
])

async function onload() {
  const url = 'http://localhost:8000/api/products'
  const response = await axios.get(url)
  products.value = response.data.data
}
onMounted(onload)

function onadd() {
  console.log('onadd')
  router.push({ name: 'product-item', params: { id: 0 } })
}
function onedit(item) {
  console.log('onedit ' + item.title)
  // ルーティング
  router.push({ name: 'product-item', params: { id: item.id } })
}
function ondelete(item) {
  console.log('ondelete')
}
function onup(item) {
  console.log('onup')
}
function ondown(item) {
  console.log('ondown')
}
</script>

<style>
/* Add your custom styles here */
.btn {
  margin-right: 5px;
  margin-left: 5px;
}

.title {
  overflow: hidden;
  background-color: green;
}
.title-name1 {
  float: left;
  color: white;
  margin: 15px 30px;
}

.title-name2 {
  float: right;
  color: white;
  margin: 15px 30px;
}

.sub-title1 {
  float: right;
  margin-right: 140px;
}

.btn-custom {
  color: white;
  background-color: green;
}

.btn-custom:hover {
  color: white;
  background-color: darkgreen;
}

.btn-active {
  color: white;
  background-color: darkgreen;
}

.btn4 {
  float: right;
  margin-right: 40px;
}
</style>
