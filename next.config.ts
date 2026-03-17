import type { NextConfig } from "next";
import userConfig from './clouduser.next.config';

const webflowOverrides: NextConfig = {
  basePath: '/app',
  assetPrefix: 'https://83bbddbd-6647-4791-bd09-2e1ac6f3df3f.wf-app-prod.cosmic.webflow.services/app',
  images: {
    ...userConfig.images,
    // TODO: determine whether any of the non-custom loader options (imgix, cloudinary, akamai) work
    // and if so allow them to be used here
    loader: 'custom',
    loaderFile: userConfig.images?.loaderFile || './webflow-loader.ts',
  },
};

const nextConfig: NextConfig = {
  ...userConfig,
  ...webflowOverrides,
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
