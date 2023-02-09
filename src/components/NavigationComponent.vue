<template>
  <nav id="navigation">
    <router-link class="navigation__link" to="/">Trending</router-link>
    <router-link class="navigation__link" to="/news">What's New</router-link>
    <router-link class="navigation__link" to="/subscriptions">Subscriptions</router-link>
    <router-link class="navigation__link" to="/playlists">My Playlists</router-link>
  </nav>
</template>

<style scoped lang="scss">
#navigation {
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  color: white;

  .navigation__link {
    padding: 0 .5rem;

    position: relative;

    display: flex;
    align-items: center;

    color: white;

    &::after {
      content: '';

      height: 4px;
      width: 0;

      position: absolute;
      bottom: 0;
      left: 0;

      background-color: whitesmoke;
    }

    &:hover::after, &.active::after {
      width: 100%;
    }
  }
}
</style>
