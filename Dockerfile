FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY public public
COPY tsconfig.json .


ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

USER bun
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "src/index.ts" ]
