<script setup lang="ts"></script>

<template>
  <div class="back-to-home">
    <NuxtLink to="/events" class="back-to-home-button-border">
      <div class="back-to-home-button">
        <div class="back-to-home-button-text">
          <p>企画一覧に戻る</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.back-to-home {
  margin: 2em 0;
  transition: 0.3s;
  width: fit-content;

  &:active {
    padding-top: 0.3em;
  }

  .back-to-home-button-border {
    text-decoration: none;

    .back-to-home-button {
      border-radius: 2em;
      border: solid 1px var(--thick-font-color);

      .back-to-home-button-text {
        color: var(--thick-font-color);
        padding: 1em 0;
        width: min(10em, 40svw);
        text-align: center;
      }
    }
  }
}

.back-to-home-button:hover {
  background-color: var(--thick-font-color);

  .back-to-home-button-text:hover {
    color: #fff;
  }
}
</style>
