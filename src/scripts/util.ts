import baseMessages from "@/assets/messages";

export const allMessages = preprocessList(baseMessages);

export type ListType = "safe" | "unsafe" | "all";

export function randomMessage(type: ListType): string {
  const filtered = baseMessages[type];
  return filtered[Math.floor(filtered.length * Math.random())];
}

function preprocessList(list: Record<string, string[]>): Record<string, string> {
  const output: Record<string, string> = {};

  Object.entries(list).forEach(([_, listItem]) => {
    listItem.forEach((message) => {
      output[message] = Bun.hash(message).toString();
    });
  });

  return output;
}

export function messageToHash(message: string): string | null {
  return allMessages[message] ?? null;
}

export function hashToMessage(hash: string): string | null {
  return Object.keys(allMessages).find((key) => allMessages[key] === hash) ?? null;
}

export const BASE_URL = process.env.BASE_URL;
