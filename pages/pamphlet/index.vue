<script lang="ts" setup>
import BackToHome from "~/components/BackToHome.vue";
import BreadCrumbsList from "~/components/BreadCrumbsList.vue";

useHead({
  title: "常盤祭パンフレット | 23常盤祭公式HP~未来航路~",
  meta: [
    {
      name: "description",
      content: "常盤祭パンフレットのダウンロードはこちらから!!",
    },
  ],
});

const { gtag } = useGtag();

gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name: "Pamphlet",
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="パンフレット" />
    <BreadCrumbsList />
    <div class="content-root">
      <div class="inner-pamphlet">
        <div class="pamphlet-items">
          <img
            alt="pamphlet"
            class="pamphlet-img"
            src="/images/pamphlet/pamphlet-face.webp"
          />
          <div class="pamphlet-text">
            <p>下のボタンからパンフレットをダウンロードできます</p>
            <div class="pamphlet-download">
              <p>軽量版（17.7MB）</p>
              <a
                class="pamphlet-button"
                href="https://storage.googleapis.com/tokiwa23-assets/tokiwa23-pamphlet-light.pdf"
                rel="noopener noreferrer"
                target="_blank"
                @click="
                  gtag('event', 'download', {
                    event_category: 'pamphlet',
                    event_label: 'light',
                  })
                "
              >
                <DownloadButton />
              </a>
            </div>
            <div class="pamphlet-download">
              <p>高画質版（28.4MB)</p>
              <a
                class="pamphlet-button"
                href="https://storage.googleapis.com/tokiwa23-assets/tokiwa23-pamphlet-high.pdf"
                rel="noopener noreferrer"
                target="_blank"
                @click="
                  gtag('event', 'download', {
                    event_category: 'pamphlet',
                    event_label: 'high',
                  })
                "
              >
                <DownloadButton />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
}

.inner-pamphlet {
  .pamphlet-items {
    display: flex;
    width: 100%;
    padding: 0 2em;
    box-sizing: border-box;
    margin-top: 2em;

    .pamphlet-img {
      width: 40svw;
      height: 31.46svw; /*縦横比固定*/
    }

    .pamphlet-text {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 10%;
      width: 40svw;
      margin-top: 2em;

      .pamphlet-download {
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .pamphlet-button {
          color: var(--thick-font-color);
          text-decoration: none;
        }

        > p {
          margin-bottom: 1em;
        }
      }
    }
  }
}

.bottom-button {
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .inner-pamphlet {
    .pamphlet-items {
      width: 100svw;
      margin-left: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .pamphlet-text {
        margin-left: 0;
        width: 100%;

        .pamphlet-download {
          margin-top: 1em;
        }

        > p {
          text-align: center;
          width: 80svw;
          margin-left: 10svw;
        }
      }
    }
  }
}
</style>
