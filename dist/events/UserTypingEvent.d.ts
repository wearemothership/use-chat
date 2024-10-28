import { ChatEventType } from "../enums";
import { ChatEvent } from "./ChatEvent";
import { ConversationId, UserId } from "../Types";
export interface UserTypingEventParams {
    readonly userId: UserId;
    readonly conversationId: ConversationId;
    readonly content: string;
    readonly isTyping: boolean;
}
export declare class UserTypingEvent implements ChatEvent<ChatEventType.UserTyping> {
    readonly type = ChatEventType.UserTyping;
    readonly userId: UserId;
    readonly conversationId: ConversationId;
    readonly content: string;
    readonly isTyping: boolean;
    constructor({ userId, conversationId, content, isTyping, }: UserTypingEventParams);
}
