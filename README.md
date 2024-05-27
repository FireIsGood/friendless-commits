# Friendless Commits

> [!IMPORTANT]  
> I haven't actually bought the domain yet, so the endpoints will not line up :(

> For when you want to lose all your friends.

A website and CLI endpoint to get questionable commit messages. Visit the site or add `?text` for a `curl` URL.

To add it as a bash command:

```bash
git config --global alias.yolo '!git commit -m "$(curl -s https://friendlesscommits.dev/all?text)"' # you may replace "all" with "safe" or "unsafe"
```

Heavily inspired by [What The Commit](https://github.com/ngerakines/commitment).

## For developers

<details>

<summary>How to run locally or develop...</summary>

## Running Locally

### Via bun

If you have bun installed, you can simply run:

```bash
bun install
bun run serve
```

### Via a docker container

First, copy the `example.docker-compose.yml` and `example.env.local` files to the actual file names:

```bash
cp ./example.docker-compose.yml ./docker-compose.yml
cp ./example.env.local ./env.local
```

To launch the docker container, run:

```bash
docker-compose up
```

The server runs on port `3000` by default with the base URL `https://friendlesscommits.dev/`. You can change these in
the `.env.local` file or in the `docker-compose.yml` file.

## Development

This project uses the bun JS runtime. First, install dependencies:

```bash
bun install
```

Then, to start the development server run:

```bash
bun run dev
```

</details>

## Contributing

Contributions of code or commit messages are welcome!

You can add messages to [messages.ts](src/assets/messages.ts) in the corresponding category. For issues with the code,
feel free to make issues or pull requests.
