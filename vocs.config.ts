import { defineConfig } from "vocs";

export default defineConfig({
  title: "Open Frames",
  sidebar: [
    {
      text: "Specification",
      link: "/",
    },
    {
      text: "Quickstart",
      collapsed: false,
      items: [
        {
          text: "frames.js",
          link: "/quickstart/frames-js",
        },
        {
          text: "OnchainKit",
          link: "/quickstart/onchainkit",
        },
      ],
    },
    {
      text: "Ecosystem",
      collapsed: false,
      items: [
        {
          text: "XMTP",
          link: "/ecosystem/xmtp",
        },
        {
          text: "Lens",
          link: "/ecosystem/lens",
        },
      ],
    },
  ],
});
