// Web Storage is an in-browser data storage mechanism that allows data to be stored on the client device so that it can be accessed from different pages and sessions.

// There are two main technologies in Web Storage:
//LocalStorage
// Using Local Storage, the data is permanently stored (unless the user deletes it himself), which means that it will remain there when the user moves from page to page or closes the browser. 
// Accessing Local Storage data is very easy as it has no blackout period.
// store the data
// localStorage.setItem('key', 'value');

// // get the data
// let data = localStorage.getItem('key');

// // Delete data
// localStorage.removeItem('key');

// // Clear all Local Storage
// localStorage.clear();

//2. Session Storage
//Session Storage works like Local Storage, but it only stores data in one session. When the browser tab or window is closed, the data is deleted. Session Storage is more efficient for storing intermediate data that should not be persistent.
// მონაცემების შენახვა
// sessionStorage.setItem('key', 'value');

// // მონაცემების აღება
// let data = sessionStorage.getItem('key');

// // მონაცემების წაშლა
// sessionStorage.removeItem('key');

// // მთელი Session Storage-ის გაწმენდა
// sessionStorage.clear();

//cookies Cookies: Used mainly to store domain-specific data, although their size is limited (up to 4KB) and they include characters that come with each HTTP request. Cookies are often used for authentication.

// Main features of cookies:
// Settings: Cookies are stored according to one specific domain.
// Size: The size of each cookie is limited (about 4KB).
// Timing: Cookies have a time negotiation after which they are automatically deleted.
// Delivery: Cookies are automatically delivered with all subsequent HTTP requests to the same domain.

//Cookie
// Security: Cookies can be secured if the HttpOnly and Secure options are used. This makes it particularly reliable, as HttpOnly protects the cookie from being read by JavaScript (thus protecting against XSS attacks). Secure ensures that the cookie will only be forwarded over HTTPS connections, reducing remote attacks.

//localStorage
// Security: localStorage is not protected from being read by JavaScript (no HttpOnly parameter), so it is more vulnerable to XSS attacks. If you have JavaScript on 
// the page, you can read localStorage data.
//Final conclusion:
// If security is a top priority for you, then Cookies are a more reliable choice, especially using the HttpOnly and Secure settings.
// If you only need to store data temporarily and you don't want data to be transferred with HTTP requests, then localStorage or sessionStorage would be better.
// However, localStorage and sessionStorage are not protected against XSS attacks, so their use for sensitive data is not recommended.