import { defineConfig } from "vocs";

export default defineConfig({
  logoUrl: { light: "/openframes.svg", dark: "/openframes-dark.svg" },
  iconUrl: "/icon.png",
  ogImageUrl: "https://openframes.xyz/opengraph.png",

  title: "Open Frames",
  description:
    "An extension of Open Graph that makes link previews interactive.",
  rootDir: ".",
  head({ path }) {
    if (path === "/") {
      return (
        <>
          <meta property="og:type" content="website" />
          <meta name="fc:frame" content="vNext" />
          <meta name="of:version" content="vNext" />
          <meta name="of:accepts:farcaster" content="vNext" />
          <meta name="of:accepts:xmtp" content="2024-02-09" />
          <meta name="of:accepts:lens" content="1.0.0" />
          <meta name="of:accepts:anonymous" content="1.0.0" />
          <meta
            name="fc:frame:image"
            content="https://openframes.xyz/opengraph.png"
          />
          <meta
            property="og:image"
            content="https://openframes.xyz/opengraph.png"
          />
          <meta name="fc:frame:button:1" content="Read Docs" />
          <meta name="fc:frame:button:1:action" content="link" />
          <meta
            name="fc:frame:button:1:target"
            content="https://openframes.xyz"
          />
        </>
      );
    }

    return <></>;
  },
  sidebar: [
    {
      text: "Specification",
      link: "/",
    },
    {
      text: "Quickstart",
      link: "/quickstart",
    },
    {
      text: "Build Open Frames with",
      collapsed: false,
      items: [
        {
          text: "Frames.js",
          link: "/quickstart/frames-js",
        },
        {
          text: "OnchainKit",
          link: "/quickstart/onchainkit",
        },
        {
          text: "Frog",
          link: "/quickstart/frog",
        },
        {
          text: "Neynar",
          link: "/quickstart/neynar",
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
