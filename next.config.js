const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Use Webpack 5 for both the client and server builds
    config.resolve.fallback = {
      fs: false, // Avoids resolving 'fs' module issues
      path: false, // Avoids resolving 'path' module issues
    };

    if (!isServer) {
      // Only enable React 17's new JSX runtime for client-side
      config.resolve.alias['react/jsx-runtime'] = require.resolve('react/jsx-runtime');
    }

    return config;
  },
};

