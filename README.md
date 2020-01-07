### Troubleshooting steps
1. Open [documentation](http://apiv2-docs.photorank.me/index.html#header-root-endpoint) for reference.
2. Set `customerId` and `apiKey` as variables. Though this is for a single "customer", I believe it makes sense to treat these as variables rather than hardcoding them into the URLs requested via AJAX.
3. Set `olapicEndpoint`.
4. Once AJAX returns success, set the `mediaArray` to the `_embedded.media` array of objects returned within the `data` object.
5. Loop through `mediaArray`, setting the `olapicImage` to the value of `images.normal` property. Normal seemed like a suitable size for this application.
6. Removed `max-width` on `.owl-carousel .owl-stage-outer` to allow larger-width viewing, per the mockup.
7. Set `nav` option to true to enable the nav arrows (already set as `navText` but not rendered because `nav` was set to false).
8. Position the navigation arrows with their `left` and `right` css properties.
9. Test on desktop (Chrome, Safari, and IE via BrowserStack), as well as mobile (Chrome on Pixel 3 via BrowserStack and mobile Safari on actual iPhone 11) to ensure proper functioning across devices.