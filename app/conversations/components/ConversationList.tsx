"use client";

import { Conversation } from "@prisma/client";

interface ConversationListProps {
  initialItems: Conversation[];
}
const ConversationList: React.FC<ConversationListProps> = () => {
  return <div>ConversationList</div>;
};

export default ConversationList;
