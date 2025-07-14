import 'reflect-metadata'

export function CommandHandler(handler: any) {
  return (target: any) => {
    Reflect.defineMetadata('commandHandler', { handler }, target);
  };
}
