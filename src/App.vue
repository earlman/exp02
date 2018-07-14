<template>
    <div id="app">
        "App" div
        <button class="ui primary button">
        Save
        </button>
        <button class="ui button">
        Discard
        </button>
        <sui-button primary>Primary</sui-button>
        <sui-button secondary>Secondary</sui-button>
      <router-view> main application content </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

