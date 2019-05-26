module.exports = {
  pwa: {
    themeColor: '#296e99',
    workboxOptions: {
      exclude: [
        /\.map$/,
        /img\/icons\//,
        /favicon\.ico$/,
        /manifest\.json$/,
        /lines\.json$/
      ]
    }
  }
}