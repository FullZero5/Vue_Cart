<template>
  <div class="toggle">
    <input
      id="toggle-on"
      class="toggle toggle-left"
      name="toggle"
      :value="toggle"
      type="radio"
      checked
    />
    <label for="toggle-on" class="btn" @click.self="toggleChenge">Yes</label>
    <input
      id="toggle-off"
      class="toggle toggle-right"
      name="toggle"
      :value="toggle"
      type="radio"
    />
    <label for="toggle-off" class="btn" @click.self="toggleChenge">No</label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Toggle",
  computed: {
    ...mapGetters(["toggle"])
  },
  methods: {
    ...mapActions(["toggleChenge"])
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  z-index: -1;
}
.btn {
  border: 2px solid #2c97de;
  display: inline-block;
  padding: 10px;
  position: relative;
  text-align: center;
  transition: background 600ms ease, color 600ms ease;
}

input[type="radio"].toggle {
  display: none;
  & + label {
    cursor: pointer;
    min-width: 60px;
    &:hover {
      background: none;
      color: #2c97de;
    }
    &:after {
      background: #2c97de;
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
      width: 100%;
      z-index: -1;
    }
  }
  &.toggle-left + label {
    border-right: 0;
    &:after {
      left: 100%;
    }
  }
  &.toggle-right + label {
    margin-left: -5px;
    &:after {
      left: -100%;
    }
  }
  &:checked + label {
    cursor: default;
    color: #fff;
    transition: color 200ms;
    &:after {
      left: 0;
    }
  }
}
</style>
