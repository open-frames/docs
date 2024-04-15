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
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/open-frames/standard",
    },
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/open-frames",
    },
  ],
});
