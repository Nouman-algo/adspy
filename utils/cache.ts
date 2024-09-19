const cache = new Map<string, any>();

export function getFromCache(key: string) {
  return cache.get(key);
}

export function setToCache(key: string, value: any, ttl: number = 3600) {
  cache.set(key, value);
  setTimeout(() => cache.delete(key), ttl * 1000); // Invalidate cache after TTL
}
