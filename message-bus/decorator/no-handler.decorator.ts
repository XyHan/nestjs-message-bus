export function NoHandler() {
  return (target: any) => {
    Reflect.defineMetadata('noHandler', null, target);
  };
}
