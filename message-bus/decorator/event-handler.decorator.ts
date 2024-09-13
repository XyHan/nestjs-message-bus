export function EventHandler(handler: any) {
  return (target: any) => {
    Reflect.defineMetadata('eventHandler', { handler: handler }, target);
  };
}
