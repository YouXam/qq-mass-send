<template>
  <div class="container">
    <div class="width-80">
      <h1>QQ 群发助手</h1>
      <hr />
      <h2>当前账号</h2>
      <n-list class="list">
        <n-list-item>
          <template #prefix>
            <n-avatar
              size="large"
              :src="'http://q1.qlogo.cn/g?b=qq&nk=' + account + '&s=640'"
            />
          </template>
          <n-thing :title="nickname" content-style="margin-top: 10px;">
            <template #description>
              <span class="label">{{ account }}</span>
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
      <n-upload
        ref="upload"
        :default-upload="false"
        class="upload"
        :show-file-list="false"
        @change="importConfig"
      >
        <n-button>导入配置</n-button>
      </n-upload>
      <h2>添加祝福语</h2>
      <n-list class="list">
        <n-list-item
          style="width: 100%"
          v-for="(greeting, i) in greetings"
          :key="i"
        >
          <n-input
            v-model:value="greetings[i]"
            @change="
              greetings[i].length > 0 ? '' : greetings.splice(i, 1),
                Object.keys(personGreetings).forEach((key: string) => {
                  if (personGreetings[parseInt(key)].auto)
                    personGreetings[parseInt(key)].greetings = 0;
                })
            "
            placeholder="使用 {name} 作为称呼的占位符"
          />
        </n-list-item>
        <n-list-item>
          <n-button
            @click="
              () => {
                greetings.push('');
              }
            "
          >
            添加祝福语
          </n-button>
        </n-list-item>
      </n-list>
      <h2>选择好友</h2>
      <n-transfer
        ref="transfer"
        v-model:value="selecedFriends"
        virtual-scroll
        :options="friendsDataSource"
        source-filterable
        target-filterable
      />
      <h2>选择称呼和祝福语</h2>
      <n-list class="list">
        <n-list-item
          v-for="(friend, i) in selecedFriends"
          :key="i"
          style="width: 100%"
        >
          <template #prefix>
            <n-avatar
              size="large"
              :src="'http://q1.qlogo.cn/g?b=qq&nk=' + friend + '&s=640'"
            />
          </template>
          <n-thing
            :title="friendMap[selecedFriends[i]].nickname"
            content-style="margin-top: 10px;"
          >
            <template #description>
              <span class="label">祝福语：</span>
              <n-select
                v-model:value="personGreetings[selecedFriends[i]].greetings"
                :options="
                  greetings
                    .map((e, i) => {
                      return { label: e, value: i };
                    })
                    .concat({
                      label: '自定义',
                      value: -1,
                    })
                "
                @update:value="
                  (value: string) => {
                    personGreetings[selecedFriends[i]].auto = false;
                  }"
            /></template>
            <template v-if="personGreetings[selecedFriends[i]].greetings >= 0">
              <span class="label">称呼：</span>
              <n-input
                v-model:value="personGreetings[selecedFriends[i]].remark"
                placeholder="请输入..."
              />
            </template>
            <template v-else>
              <span class="label">自定义祝福语：</span>
              <n-input
                placeholder="请输入..."
                v-model:value="
                  personGreetings[selecedFriends[i]].customGreetings
                "
              />
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
      <h2>检查和发送</h2>
      <n-list class="list">
        <n-list-item v-for="(friend, i) in selecedFriends" :key="i">
          <template #prefix>
            <n-avatar
              size="large"
              :src="'http://q1.qlogo.cn/g?b=qq&nk=' + friend + '&s=640'"
            />
          </template>
          <n-space>
            <n-thing
              :title="friendMap[selecedFriends[i]].nickname"
              content-style="margin-top: 10px;"
            >
              <template #description>
                {{
                  personGreetings[selecedFriends[i]].greetings >= 0
                    ? greetings[
                        personGreetings[selecedFriends[i]].greetings
                      ].replaceAll(
                        "{name}",
                        personGreetings[selecedFriends[i]].remark
                      )
                    : personGreetings[selecedFriends[i]].customGreetings
                }}
              </template>
            </n-thing>
            <n-alert
              :title="statuss[friend] === 'ok' ? '发送成功' : '发送错误'"
              :type="statuss[friend] === 'ok' ? 'success' : 'error'"
              v-if="statuss?.[friend]"
            >
              {{ statuss[friend] }}
            </n-alert>
          </n-space>
        </n-list-item>
      </n-list>
      <n-button @click="exportConfig" style="margin-bottom: 20px"
        >导出配置</n-button
      >
      <n-button @click="send" type="primary" :disabled="disabled"
        >发送！</n-button
      >
      <n-progress
        style="margin-top: 20px; width: 50%"
        v-if="sending"
        type="line"
        :status="status"
        :percentage="percentage"
      />
      <span style="margin-bottom: 100px"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import {
  NTransfer,
  NList,
  NListItem,
  NButton,
  NInput,
  NThing,
  NAvatar,
  NSelect,
  NProgress,
  NAlert,
  NSpace,
  NUpload,
  UploadFileInfo,
} from "naive-ui";

interface Friend {
  user_id: number;
  nickname: string;
  sex: string;
  remark: string;
  class_id: number;
}

export default defineComponent({
  name: "App",
  components: {
    NTransfer,
    NList,
    NListItem,
    NButton,
    NInput,
    NAvatar,
    NThing,
    NSelect,
    NProgress,
    NAlert,
    NUpload,
    NSpace,
  },
  setup() {
    const friends: Ref<Array<Friend>> = ref([]);
    const friendsDataSource: Ref<Array<{ label: string; value: number }>> = ref(
      []
    );
    const selecedFriends: Ref<Array<number>> = ref([]);
    const greetings: Ref<Array<string>> = ref([]);
    const friendMap: Ref<{ [key: number]: Friend }> = ref({});
    const statuss: Ref<{ [key: number]: string }> = ref({});
    const personGreetings: Ref<{
      [key: number]: {
        remark: string;
        greetings: number;
        auto: boolean;
        customGreetings?: string;
      };
    }> = ref({});
    const sending: Ref<boolean> = ref(false);
    const percentage: Ref<number> = ref(0);
    const status: Ref<string> = ref("");
    const disabled: Ref<boolean> = ref(false);
    const nickname: Ref<string> = ref("");
    const account: Ref<number> = ref(0);
    function send() {
      const res = [];
      for (const friend of selecedFriends.value) {
        const greeting = personGreetings.value[friend];
        res.push({
          user_id: friend,
          message:
            greeting.greetings >= 0
              ? greetings.value[greeting.greetings].replaceAll(
                  "{name}",
                  greeting.remark
                )
              : greeting.customGreetings,
        });
      }
      sending.value = true;
      disabled.value = true;
      percentage.value = 0;
      status.value = "";
      fetch("/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      })
        .then((res) => res.json())
        .then((data: [{ status: string; reason: string; user_id: number }]) => {
          percentage.value = 100;
          disabled.value = false;
          status.value = data.every((e) => e.status === "ok")
            ? "success"
            : "error";
          data.forEach((e) => {
            statuss.value[e.user_id] = e.status === "ok" ? "ok" : e.reason;
          });
          console.log(data);
        });
    }
    function exportConfig() {
      const res = {
        greetings: greetings.value,
        selecedFriends: selecedFriends.value,
        personGreetings: personGreetings.value,
      };
      const a = document.createElement("a");
      a.href = URL.createObjectURL(
        new Blob([JSON.stringify(res, null, 2)], {
          type: "application/json",
        })
      );
      a.download = "config.json";
      a.click();
    }
    function importConfig(options: { fileList: UploadFileInfo[] }) {
      const file = options.fileList[0].file;
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e.target?.result) return;
        const res = JSON.parse(e.target.result as string);
        greetings.value = res.greetings;
        selecedFriends.value = res.selecedFriends;
        personGreetings.value = res.personGreetings;
      };
      reader.readAsText(file);
    }
    fetch("/status")
      .then((res) => res.json())
      .then((data) => {
        nickname.value = data.nickname;
        console.log(data);
        account.value = data.qq;
      });
    fetch("/friends")
      .then((res) => res.json())
      .then((data) => {
        friends.value = data;
        friends.value.forEach((friend: Friend) => {
          friendMap.value[friend.user_id] = friend;
          personGreetings.value[friend.user_id] = {
            remark: friend.remark,
            greetings: greetings.value?.[0] ? 0 : -1,
            auto: true,
            customGreetings: "你好。",
          };
        });
        friendsDataSource.value = friends.value.map((friend: Friend) => {
          return {
            label:
              friend.nickname +
              (friend.remark ? `- ${friend.remark}` : "") +
              " (" +
              friend.user_id +
              ")",
            value: friend.user_id,
          };
        });
      });
    return {
      friendsDataSource,
      selecedFriends,
      greetings,
      friendMap,
      personGreetings,
      send,
      sending,
      percentage,
      status,
      disabled,
      statuss,
      nickname,
      account,
      exportConfig,
      importConfig,
    };
  },
});
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.width-80 {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

hr {
  width: 100%;
  height: 1px;
  background-color: rgb(0, 0, 0);
}
.list {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.label {
  margin-bottom: 5px;
  display: block;
  color: gray;
  font-style: bold;
  font-weight: bold;
}

.upload {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
