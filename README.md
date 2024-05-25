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

<details>

<summary>For developers</summary>

## Running Locally

To launch the docker container, run:

```bash
docker-compose up
```

Or really whatever you want to do with docker. I'm no expert...

The server runs on port `3000` by default.

## Development

This project uses the bun JS runtime.

To start the development server run:

```bash
bun run dev
```

</details>

## Contributing

Add to the [messages.ts](src/assets/messages.ts) in the corresponding category.
