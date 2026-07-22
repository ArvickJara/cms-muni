"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    {
        name: 'strapi::body',
        config: {
            formLimit: '500mb',
            jsonLimit: '500mb',
            textLimit: '500mb',
            xmlLimit: '500mb',
            formidable: {
                maxFileSize: 500 * 1024 * 1024,
            },
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
