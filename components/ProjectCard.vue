<script lang="ts" setup>
import { genreToString } from "~/model/genre";
import { placeToString } from "~/model/place";

const props = defineProps<{
  eventData: {
    id: number;
    event_name: string;
    event_genre: number;
    place_id: number;
    place_name: string;
    org_name: string;
  };
}>();
const showNoImage = function (e) {
  e.target.src =
    "https://storage.googleapis.com/tokiwa23-assets/icons/no-image";
  e.target.onerror = null;
};
const iconURL = `https://storage.googleapis.com/tokiwa23-assets/icons/${props.eventData.id}`;
</script>

<template>
  <div class="project-card">
    <div class="incline-card">
      <div class="card-photo">
        <img src="/images/card-icon.webp" alt="anchor" class="anchor-icon" />
        <img
          src="/images/card-back-img.webp"
          alt="back-image"
          class="back-image"
        />
        <img
          :src="iconURL"
          @error="showNoImage"
          alt="project-icon"
          class="project-icon"
        />
      </div>
      <div class="card-script">
        <p class="event-name">{{ props.eventData.event_name }}</p>
        <hr class="line" />
        <p>{{ props.eventData.org_name }}</p>
        <p>
          {{ genreToString(props.eventData.event_genre) }}
        </p>
        <p>
          {{
            placeToString(props.eventData.place_id) + props.eventData.place_name
          }}
        </p>
      </div>
      <div class="card-button">
        <p class="button-messeage">MORE</p>
        <img src="/images/arrow.webp" alt="arrow" class="arrow" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.incline-card {
  position: relative;
  width: 265px;
  height: 430px;
  background-color: var(--main-background-color);
  border-radius: 10px;
  border: 2px var(--thick-font-color) solid;
}
.project-card {
  width: fit-content;
  position: relative;
  z-index: 1;
  &:hover {
    transform: rotate(10deg);
    transition: 0.2s;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 15px;
    width: 265px;
    height: 430px;
    background-color: var(--main-background-color);
    border-radius: 10px;
    border: 2px var(--thick-font-color) solid;
  }
}

.anchor-icon {
  position: absolute;
  z-index: 4;
  top: 8px;
  right: 12px;
}
.back-image {
  position: relative;
  z-index: 3;
  top: 15px;
  left: 18px;
}
.project-icon {
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
  z-index: 4;
  top: 110px;
  left: 57.5px;
  border-radius: 20px;
}
.card-script {
  position: relative;
  text-align: center;
  top: 90px;
  z-index: 4;
  p {
    color: var(--thin-font-color);
    font-size: 14px;
    font-weight: bold;
    margin: 12px auto;
  }
  .event-name {
    font-size: 16px;
  }
}

.line {
  width: 90%;
  background-color: var(--thin-font-color);
  height: 2px;
  border: none;
}
.card-button {
  position: absolute;
  z-index: 4;
  bottom: 5px;
  right: 15px;
  display: flex;
  align-items: center;
  .button-messeage {
    margin: 0 0;
    color: var(--thin-font-color);
  }
  .arrow {
    width: 20px;
    height: 15px;
  }
}
</style>