export let assistantId = "asst_13WczBOxKP3qv6nSyxMfco96"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
