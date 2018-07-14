<template>
    <div id="app">
        <SuiSidebar animation="push" :visible="sidebar">
            <SuiSidebarPusher>test</SuiSidebarPusher>
        </SuiSidebar>
            "App" div
            <button class="ui primary button" >
            Save
            </button>
            <button class="ui button">
            Discard
            </button>
            <SuiButton primary v-on:click="sidebar=!sidebar">Primary</SuiButton>
            <sui-button secondary>Secondary</sui-button>
            <router-view> main application content </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        sidebar: true,
    };
  }
};
</script>

