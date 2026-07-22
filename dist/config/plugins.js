"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
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
