import { defineConfig } from "vocs";

export default defineConfig({
  title: "Open Frames - Docs",
  description:
    "An extension of Open Graph that makes link previews interactive.",
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
      text: "Best Practices",
      link: "/best-practices",
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
        {
          text: "Farcaster",
          link: "/ecosystem/farcaster",
        },
      ],
    },
    {
      text: "Examples",
      collapsed: false,
      items: [
        {
          text: "Awesome Open Frames ↗︎",
          link: "https://github.com/open-frames/awesome-open-frames",
        },
      ],
    },
  ],
  topNav: [
    { text: "GitHub", link: "https://github.com/open-frames/standard" },
    { text: "Farcaster", link: "https://warpcast.com/~/channel/open-frames" },
    { text: "XMTP", link: "https://converse.xyz/dm/openframes.eth" },
    { text: "Lens", link: "https://hey.xyz/u/openframes" },
    { text: "X", link: "https://x.com/openframesxyz" },
  ],
});
