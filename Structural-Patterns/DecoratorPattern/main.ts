import { logMessage } from "./logging";
import { encryptMessage } from "./encryption";

class DecoratedMessageService {
  @logMessage
  @encryptMessage
  sendMessage(message: string): void {
    console.log(`Sending message: ${message}`);
  }
}

const messageService = new DecoratedMessageService();
messageService.sendMessage("I'm decorated by decoratorPattern");
