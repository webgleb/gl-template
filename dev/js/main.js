/*global $, window, Moff */

// frameworks
//=include ../../dist/bower_components/jquery/dist/jquery.js
//=include ../../dist/bower_components/moff/dist/moff.min.js


// libs
//=include lib/modernizr-custom.js

// plugins

// separate
//=include helpers/object-fit.js
//=include separate/global.js

// components
//=include components/js-header.js


// the main code

// example of how to use moff js

// window.moffConfig = {
//     breakpoints: {
//         sm: 768,
//         md: 992,
//         lg: 1200
//     },
//     loadOnHover: true,
//     cacheLiveTime: 2000
// };

// if ($(".js-component").length > 0) {
//     Moff.amd.register({
//         id: 'js-sign',
//         depend: {
//             js: ['s/js/plugins/js-plugin.js']
//         },
//         file: {
//             js: ['s/js/components/js-component.js']
//         },
//         loadOnScreen: ['xs', 'sm', 'md', 'lg'],
//         onWindowLoad: true
//     });
// }