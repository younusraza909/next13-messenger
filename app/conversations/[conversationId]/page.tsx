interface IParams {
  conversationId: string;
}

const conversationId = async ({ params }: { params: IParams }) => {
  return <>ConversationId</>;
};

export default conversationId;
