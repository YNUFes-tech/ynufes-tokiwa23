<script lang="ts" setup>
// 当日までの時間を取得
const eventTime = new Date(`November 03 2023 13:00:00`).getTime();
const finishTime = new Date(`November 05 2023 15:00:00`).getTime();
onMounted(() => {
  const days = document.getElementById("days")!;
  const hours = document.getElementById("hours")!;
  const minutes = document.getElementById("minutes")!;
  const seconds = document.getElementById("seconds")!;

  updateCountdown({
    days,
    hours,
    minutes,
    seconds,
  });

  // 1秒ごとに関数を実行
  setInterval(updateCountdown, 1000, {
    days,
    hours,
    minutes,
    seconds,
  });
});

// 要素を取得

const diff = ref(0)
const currentTime = ref(0)
// カウントダウンの関数
function updateCountdown(elements: {
  days: HTMLElement;
  hours: HTMLElement;
  minutes: HTMLElement;
  seconds: HTMLElement;
}) {
  // 現在の時刻情報を取得する
  currentTime.value = new Date().getTime();
  // 現在の時間と当日との時間の差を計算する（ミリ秒単位）
  diff.value = eventTime - currentTime.value;

  // 現在から当日までの日数を計算
  const d = Math.floor(diff.value / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff.value / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff.value / 1000 / 60) % 60;
  // 秒を計算
  const s = Math.floor(diff.value / 1000) % 60;

  // 取得した時間をDOMに追加
  elements.days.innerText = String(d);
  elements.hours.innerText = String(h < 10 ? "0" + h : h);
  elements.minutes.innerText = String(m < 10 ? "0" + m : m);
  elements.seconds.innerText = String(s < 10 ? "0" + s : s);
}
</script>

<template>
  <HomeWidget>
    <template #title>
      <h1 class="countdown-title">23常盤祭</h1>
      <h2 class="countdown-sub-title" v-if="diff >= 0">まで...</h2>
    </template>
    <template #content>
      <div class="time-container" v-if="diff >= 0">
        <div>
          <p><span id="days">--</span>days</p>
        </div>
        <div>
          <p><span id="hours">--</span>hours</p>
        </div>
        <div>
          <p><span id="minutes">--</span>minutes</p>
        </div>
        <div>
          <p><span id="seconds">--</span>seconds</p>
        </div>
      </div>
      <div class="in-session" v-if="diff < 0 && finishTime - currentTime >= 0">
        <h1>開催中</h1>
      </div>
      <div class="finished" v-if="finishTime - currentTime < 0">
        <h1>終了しました</h1>
      </div>
    </template>
  </HomeWidget>
</template>

<style lang="scss" scoped>
.countdown-title {
  font-size: 35px;
  font-weight: bold;
  padding: 30px 0 0 0;
  background-color: #8cb6de;
  border-radius: 25px 25px 0 0;
}

.in-session {
  font-size: 70px;
  font-weight: bold;
  padding: 40px 0 0 0;
  border-radius: 25px 25px 0 0;
}

.finished {
  font-size: 45px;
  font-weight: bold;
  padding: 50px 0 0 0;
  border-radius: 25px 25px 0 0;
}

.countdown-sub-title {
  text-indent: 40%;
  font-size: 15px;
  font-weight: bolder;
  background-color: #8cb6de;
  margin-top: 10px;
  text-align: center;
}

/* タイマー部分を囲うコンテナー */
.time-container {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0 0 25px 25px;
  width: 80%;
  align-items: center;
  margin: 10px auto 0;

  >div {
    width: 25%;
    display: flex;
    justify-content: center;

    /* hours, minutes, secondsの共通スタイル */
    >p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;

      >span {
        font-size: 30px;
        line-height: 1;
        margin: 25px 15px;
      }
    }
  }
}
</style>
