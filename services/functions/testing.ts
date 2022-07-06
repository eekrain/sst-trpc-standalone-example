const data = {
  id1: {
    noteId: "id1",
    userId: "user1",
    createdAt: Date.now(),
    content: "Hello World!",
  },
  id2: {
    noteId: "id2",
    userId: "user2",
    createdAt: Date.now() - 10000,
    content: "Hello Old World! Old note.",
  },
};

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
