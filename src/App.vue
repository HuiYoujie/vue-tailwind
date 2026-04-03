<template>
  <div class="w-full h-screen flex flex-col bg-slate-100">

    <!-- 顶部 -->
    <header class="h-28 bg-white flex items-center justify-between border-b border-blue-200 shadow-sm">
      <div class="flex items-center h-full">
        <!-- LOGO -->
        <div class="text-xl font-bold w-56 h-full flex justify-center items-center text-blue-600">
          DEGA STORAGE
        </div>

        <!-- 设备信息 -->
        <div
          class="flex flex-col justify-around items-center w-56 h-24 text-slate-700 ml-2 px-4 py-2 rounded text-sm bg-gradient-to-b from-blue-100 to-blue-300 border border-blue-200 shadow-sm">
          <div>TLD_001</div>
          <div>127.0.0.1</div>
          <div>{{ time }}</div>
        </div>

        <!-- 告警 -->
        <div class="flex items-center w-20 ml-4 text-2xl gap-2 text-amber-500">
          <WarnTriangleFilled style="width: 1.5em; height: 1.5em" />
          <div>2</div>
        </div>
      </div>

      <!-- 导航 -->
      <nav class="flex gap-6 mr-4">
        <div class="btn flex h-20! p-3">
          <HomeFilled style="width: 3em; height: 3em" />
          <button class="flex-1 text-xl">主页</button>
        </div>

        <div class="btn flex h-20! p-3 opacity-60">
          <Grid style="width: 3em; height: 3em" />
          <button class="flex-1 text-xl">网络</button>
        </div>

        <div class="btn flex h-20! p-3">
          <List style="width: 3em; height: 3em" />
          <button class="flex-1 text-xl">列表</button>
        </div>

        <div class="btn flex h-20! p-3">
          <Setting style="width: 3em; height: 3em" />
          <button class="flex-1 text-xl">设置</button>
        </div>
      </nav>
    </header>

    <!-- 主体 -->
    <div class="flex flex-1 overflow-hidden">

      <!-- 侧边栏 -->
      <aside class="flex flex-col justify-between w-56 bg-white p-3 space-y-2 border-r border-blue-200 shadow-sm">
        <button class="btn-block">
          172.16.0.170
        </button>

        <div class="space-y-2">
          <div class="btn-block flex p-3">
            <Plus style="width: 1em; height: 1em" />
            <button class="flex-1">添加设备</button>
          </div>

          <div class="btn-block flex p-3">
            <Edit style="width: 1em; height: 1em" />
            <button class="flex-1">修改设备</button>
          </div>

          <div class="btn-block flex p-3">
            <Delete style="width: 1em; height: 1em" />
            <button class="flex-1">删除设备</button>
          </div>

          <div class="btn-block flex p-3">
            <Open style="width: 1em; height: 1em" />
            <button class="flex-1">英文页面</button>
          </div>

          <div class="btn-block flex p-3">
            <Open style="width: 1em; height: 1em" />
            <button class="flex-1">生产模式</button>
          </div>

          <div class="btn-block flex p-3">
            <Open style="width: 1em; height: 1em" />
            <button class="flex-1">深色模式</button>
          </div>

          <div class="btn-block flex p-3">
            <InfoFilled style="width: 1em; height: 1em" />
            <button class="flex-1">关于</button>
          </div>
        </div>
      </aside>

      <!-- 中间机柜 -->
      <main class="flex flex-col flex-1 px-4 py-2 overflow-hidden">

        <div class="flex-1 overflow-auto">
          <div class="grid grid-cols-2 gap-3">

            <template v-for="index in 16" :key="index">
              <div class="flex h-32 bg-white rounded border border-slate-200 shadow-sm">
                <!-- 左编号 -->
                <div class="flex flex-col items-center justify-center gap-4 w-20">
                  <div class="text-2xl font-bold text-slate-700">
                    {{ index - 1 }}
                  </div>
                  <div class="text-slate-400 text-lg">N / A</div>
                </div>

                <!-- 设备 -->
                <div class="grid grid-cols-2 flex-1 pr-2 gap-2 py-1">
                  <!-- 左列 -->
                  <div class="flex flex-col justify-around">
                    <div v-for="i in 4" :key="i" class="flex items-center" @contextmenu.prevent="
            openMenu($event, (index - 1) * 8 + (i - 1))
            ">
                      <label class="flex items-center cursor-pointer select-none">
                        <input type="checkbox" class="peer absolute opacity-0 w-5 h-5" checked />

                        <div class="w-5 h-5 rounded border border-slate-300
           flex items-center justify-center
           bg-white
           transition-all
           peer-checked:bg-blue-500
           peer-checked:border-blue-500
           peer-hover:border-blue-400">
                          <svg class="w-3 h-3 text-white transition
             peer-checked:opacity-100!" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 10l4 4 8-8" />
                          </svg>
                        </div>
                      </label>

                      <div class="device" :class="getStatusColor(
            (index - 1) * 8 + (i - 1)
          )
            ">
                        {{ (index - 1) * 8 + (i - 1) }}
                      </div>
                    </div>
                  </div>

                  <!-- 右列 -->
                  <div class="flex flex-col justify-around ml-2">
                    <div v-for="i in 4" :key="i" class="flex items-center" @contextmenu.prevent="
            openMenu(
              $event,
              (index - 1) * 8 + (i - 1) + 4
            )
            ">
                      <label class="flex items-center cursor-pointer select-none">
                        <input type="checkbox" class="peer absolute opacity-0 w-5 h-5" checked />

                        <div class="w-5 h-5 rounded border border-slate-300
           flex items-center justify-center
           bg-white
           transition-all
           peer-checked:bg-blue-500
           peer-checked:border-blue-500
           peer-hover:border-blue-400">
                          <svg class="w-3 h-3 text-white transition
             opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 10l4 4 8-8" />
                          </svg>
                        </div>
                      </label>

                      <div class="device" :class="getStatusColor(
            (index - 1) * 8 + (i - 1) + 4
          )
            ">
                        {{ (index - 1) * 8 + (i - 1) + 4 }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </div>

        <!-- 底部 -->
        <footer class="mt-4 h-8 flex items-center justify-center gap-4 relative border-t border-blue-200 pt-2">
          <button class="absolute left-0 btn">
            按钮
          </button>

          <button class="btn">
            按钮
          </button>
        </footer>
      </main>
    </div>

    <!-- 右键菜单 -->
    <div v-if="visible" class="fixed rounded-md z-50 p-1 bg-white flex flex-col gap-1 border border-slate-200 shadow-lg"
      :style="{ left: x + 'px', top: y + 'px' }">
      <div class="px-4 py-2 text-sm text-slate-600">
        机器编号 {{ number }}
      </div>

      <button v-for="i in 3" :key="i" class="btn-block bg-transparent! hover:bg-slate-100">
        操作{{ i }}
      </button>
    </div>

  </div>
</template>

<script setup>
import {
  HomeFilled,
  Grid,
  List,
  Setting,
  Plus,
  Edit,
  Delete,
  Open,
  InfoFilled,
  WarnTriangleFilled
} from '@element-plus/icons-vue'

import { ref, onMounted, onUnmounted, defineComponent } from 'vue'

/* 时间 */
const time = ref('')

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleString()
}

setInterval(updateTime, 1000)
updateTime()

/* 右键菜单 */
const visible = ref(false)
const x = ref(0)
const y = ref(0)
const number = ref(0)

const openMenu = (e, num) => {
  visible.value = true
  x.value = e.clientX
  y.value = e.clientY
  number.value = num
}

const closeMenu = () => {
  visible.value = false
}

onMounted(() => {
  window.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  window.removeEventListener('click', closeMenu)
})

/* 设备状态颜色 */
const getStatusColor = (num) => {
  if (num === 24) return 'bg-emerald-500'
  if (num === 25) return 'bg-red-500'
  if (num === 26 || num === 27) return 'bg-sky-500'
  if (num === 28) return 'bg-amber-500'

  return 'bg-slate-400'
}
</script>
