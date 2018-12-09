<template>
  <article @click="$router.go(-1);">
    <pre><output>
{{text}}: {{error}}
{{text}}: {{description}}
Data Time: {{data}}
{{user}}
Time: 1337ms
                        Asset       Size    Chunks                   Chunk Names
                    project.js     12.3 MB      0  [emitted]  [big]  project
                  dashboard.js     6.36 MB      1  [emitted]  [big]  dashboard
                   organize.js     5.29 MB      2  [emitted]  [big]  organize
                    proPens.js     4.92 MB      3  [emitted]  [big]  proPens
0.81c79b4db476a98.hot-update.js    87.4 kB      0  [emitted]         project
1.81c79b4db476a98.hot-update.js    7.94 kB      1  [emitted]         dashboard
2.81c79b4db476a98.hot-update.json  52 bytes        [emitted]
                       manifest.json  272 bytes    [emitted]
[./app/components/404.js] ./app/components/404.js 2.42 kB {0} {1} [built]</output></pre>
  </article>
</template>

<script>
export default {
  name: "Error",
  data() {
    return {
      text: "site/>",
      error: location.pathname,
      description: "Page not found" + location.pathname,
      data: new Date().toLocaleString(),
      user: navigator.userAgent
    };
  }
};
</script>

<style lang="scss" scoped>
article {
  background-color: black;
  background-image: radial-gradient(rgba(25, 150, 0, 0.75), black 120%);
  height: 100vh;
  margin: 0;
  overflow: hidden;
  padding: 2rem;
  color: white;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 5px #c8c8c8;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 0.15),
      rgba(black, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  }
}
::selection {
  background: #0080ff;
  text-shadow: none;
}
pre {
  margin: 0;
}
</style>
