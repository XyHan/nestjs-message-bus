export function QueryHandler(handler: any) {
  return (target: any) => {
    Reflect.defineMetadata('queryHandler', { handler: handler }, target);
  };
}
