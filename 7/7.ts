const createRoute = <Route extends readonly [string, ...string[]]>(
  author: string,
  route: [...Route]
) => ({
  author,
  route,
  createdAt: Date.now(),
});
