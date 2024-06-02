export function encryptMessage(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const encryptedMessage = btoa(args[0]); // Simple base64 encryption
    console.log(`Encrypting message to: ${encryptedMessage}`);
    return originalMethod.apply(this, [encryptedMessage]);
  };

  return descriptor;
}
