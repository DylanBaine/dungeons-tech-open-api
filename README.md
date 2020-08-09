# About
This repository holds example code and some documentation for the [dungeons.tech](https://dungeons.tech) public facing API.

For full documentation go to https://dungeons.tech/docs

## Authorization

The only request to the public api that does not require authorization is the login endpoint. To log in, you need to post an `email` and a `password` to `https://dungeons.tech/api/v1/login`. An example of this in practice can be found in the [login example file.](examples/login.js)

Any other request made will need an authorization header. The header would have the word "Bearer" in front of it. The [get user info](examples/get-user-info.js) example shows this in practice.

