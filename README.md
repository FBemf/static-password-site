# Static password-protected website

This is a static website which is password-protected.
It works by injecting statically-served encrypted content into the page.

The default password is `qwer1234`.

If you modify `hidden.html`, rebuild the page by running `./encrypt.js hidden.html site/hidden.html.encrypted PASSWORD`, where `PASSWORD` is your password.

There's an older version of this site in the branch `original` which was url-based.
