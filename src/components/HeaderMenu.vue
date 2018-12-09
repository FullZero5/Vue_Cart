<template>
  <header>
    <nav class="navbar" v-bind:class="{ active: showMobileMenu }">
      <a
        href="#"
        class="toggle"
        title="Меню"
        @click.prevent="showMobileMenu = !showMobileMenu;"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Icon Icon--medium Icon--colored"
        >
          <path
            d="M 0 2 L 0 4 L 24 4 L 24 2 L 0 2 z M 0 11 L 0 13 L 24 13 L 24 11 L 0 11 z M 0 20 L 0 22 L 24 22 L 24 20 L 0 20 z"
          />
        </svg>
      </a>
      <div class="brand"><a href="/" title="ТИТАН">ТИТАН</a></div>
      <div class="left">
        <a href="/about" class="link" title="О нас">О нас</a>
      </div>
      <div class="right">
        <a href="tel:88612243752" class="link" title="Телефон">
          ☎️ 8(861)224-37-52</a
        >
        <a href="https://vk.com/titanyug" class="link" title="вконтакте группа">
          @titanyug
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      showMobileMenu: false
    };
  }
};
</script>

<style lang="scss">
header {
  padding: 1em;
}
.navbar {
  background: #e2e2e2;
  .toggle,
  .brand {
    display: inline-block;
  }
  .link {
    display: block;
    width: 100%;
    text-align: center;
    padding: 1em;
    text-decoration: none;

    &:hover,
    &:active {
      background: #120494;
    }
  }
  .brand {
    width: 10em;
    text-align: center;
    padding: 1em;
    background: #e2e2e2;
  }
  .toggle {
    padding: 1em;
    color: black;
    vertical-align: middle;
  }
}

@media (min-width: 48em) {
  .navbar {
    display: flex;
    .left,
    .right {
      display: flex;
      flex: 1;
    }
    .link {
      width: auto;
    }
    .right {
      justify-content: flex-end;
    }
    .toggle {
      display: none;
    }
  }
}

.navbar {
  div {
    display: none;
    @media (min-width: 48em) {
      display: flex;
    }
  }
}

@media (max-width: 48em) {
  .navbar.active {
    .toggle {
      background: #e2e2e2;
      color: white;
    }
    div {
      display: block;
    }
  }
}
</style>
