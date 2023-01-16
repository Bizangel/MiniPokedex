import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  performance: {
    maxEntrypointSize: 4_000_000, // 4 megs
    maxAssetSize: 4_000_000
  },
  entry: './src/index.ts',
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
