import { UserId } from "./Types";
import { ConversationRole } from "./";
export type ParticipantParams = {
    id: UserId;
    role?: ConversationRole;
};
export declare class Participant {
    readonly id: UserId;
    role: ConversationRole;
    constructor({ id, role }: ParticipantParams);
}
