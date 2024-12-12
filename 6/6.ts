type ValidRoute = string | number;

const createRoute = <Route extends ValidRoute>(
  author: string,
  route: Route
): Route => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route;
};
