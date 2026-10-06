## Run

From the `hello-world-node` directory:

```sh
npm start
```

npm prints its `> hello-world-node@1.0.0 start` and `> node index.js` lines, then the server logs `Server listening on http://localhost:3000`. For a custom port:

```sh
PORT=8080 npm start
```

After the same npm lines, the server logs `Server listening on http://localhost:8080`.

## Try it

With the server running on the default port:

```sh
curl http://localhost:3000/hello
```

Output:

```text
Hello world
```
