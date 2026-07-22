export default ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 500 * 1024 * 1024, // 100 MB en bytes
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});