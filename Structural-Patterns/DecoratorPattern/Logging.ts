export function logMessage(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Logging: Sending message: ${args[0]}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}