const express = require("express");
const Vue = require("vue");
const app = express();
const renderer = require("vue-server-renderer").createRenderer(); // 服务端渲染 vue 模版

const page = new Vue({
  template: `<div>Hello SSR</div>`,
});

app.use(express.static("../dist/client"));

app.get("*", async (req, res) => {
  try {
    const html = await renderer.renderToString(page);
    res.send(html);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

app.listen(3006, () => {
  console.log("listening on http://localhost:3006");
});
