import { MessageContentType, MessageDirection, MessageStatus } from "./enums";
import { MessageContent } from "./interfaces/MessageContent";
import { ChatMessageId } from "./Types";
export type ChatMessageParams<T extends MessageContentType> = {
    id: ChatMessageId;
    status: MessageStatus;
    contentType: T;
    senderId: string;
    direction: MessageDirection;
    content: MessageContent<T>;
    createdTime?: Date;
    updatedTime?: Date;
};
export declare class ChatMessage<T extends MessageContentType> {
    id: ChatMessageId;
    status: MessageStatus;
    contentType: MessageContentType;
    senderId: string;
    direction: MessageDirection;
    content: MessageContent<T>;
    createdTime: Date;
    updatedTime?: Date;
    constructor({ id, status, contentType, senderId, direction, content, createdTime, updatedTime, }: ChatMessageParams<MessageContentType>);
}
