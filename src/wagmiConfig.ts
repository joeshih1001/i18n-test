import { mainnet, bsc } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// export const wagmiConfig = createConfig({
//   chains: [mainnet, bsc],
//   transports: {
//     [mainnet.id]: http(),
//     [bsc.id]: http(),
//   },
// })

export const wagmiConfig = getDefaultConfig({
  appName: 'My App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, bsc],
  ssr: false, // If your dApp uses server side rendering (SSR)
});