import type { StorybookConfig } from '@storybook/nextjs'
import { join, dirname } from 'path'
import type { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'

/**
 * Resolves the absolute path of a package.
 * This is useful in Yarn PnP environments or monorepos.
 */
function getAbsolutePath(value: string): string {
  try {
    return dirname(require.resolve(join(value, 'package.json')))
  } catch (error) {
    throw new Error(
      `Unable to resolve package: ${value}. Ensure it is installed.`
    )
  }
}

const isProduction = process.env.NODE_ENV === 'production'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {
      builder: {
        useSWC: true,
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  webpackFinal: async (config: Configuration) => {
    // Enable filesystem cache
    config.cache = {
      type: 'filesystem',
      cacheDirectory: join(__dirname, '.webpack-cache'),
      allowCollectingMemory: true,
      buildDependencies: {
        config: [__filename],
      },
    }

    // Find the rule that handles JavaScript/TypeScript files
    const jsRule = config.module?.rules?.find(
      rule =>
        rule &&
        typeof rule === 'object' &&
        rule.test instanceof RegExp &&
        (rule.test.test('.tsx') || rule.test.test('.jsx'))
    )

    if (jsRule && typeof jsRule === 'object' && Array.isArray(jsRule.use)) {
      jsRule.use.unshift({
        loader: 'thread-loader',
        options: {
          workers: Math.max(require('os').cpus().length - 1, 1),
          poolTimeout: isProduction ? 2000 : Infinity,
        },
      })
    } else {
      console.warn(
        'JavaScript/TypeScript loader rule not found. Thread-loader was not added.'
      )
    }

    // Optimize splitChunks
    config.optimization = {
      ...config.optimization,
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: isProduction,
            },
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 250000,
        minChunks: 1,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: 'single',
    }

    // Set appropriate devtool based on environment
    config.devtool = isProduction ? 'source-map' : 'eval-source-map'

    return config
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
  core: {
    disableTelemetry: true, // Disables telemetry for privacy and compliance
    enableCrashReports: false, // Avoids sending crash reports to Storybook servers
  },
}

export default config
