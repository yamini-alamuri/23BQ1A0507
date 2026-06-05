import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJheWFtaW5pMTUwNkBnbWFpbC5jb20iLCJleHAiOjE3ODA2Mzk1MDAsImlhdCI6MTc4MDYzODYwMCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjViYWQxZWExLWZkMTgtNGNjMC1iY2Y3LTM0OGY1Yjg5MTQxNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFsYW11cmkgeWFtaW5pIiwic3ViIjoiOGUzNDY5N2EtMmUxMy00NTI4LTlmOWItNjc0Y2I3YWU3N2ZkIn0sImVtYWlsIjoiYXlhbWluaTE1MDZAZ21haWwuY29tIiwibmFtZSI6ImFsYW11cmkgeWFtaW5pIiwicm9sbE5vIjoiMjNicTFhMDUwNyIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjhlMzQ2OTdhLTJlMTMtNDUyOC05ZjliLTY3NGNiN2FlNzdmZCIsImNsaWVudFNlY3JldCI6IlpjRWhzakJVbnFKZlR5dHEifQ.qYQd9IRvFKD_RSgRq7QzXegNpBS4yqkJOblzQcd2Ph0";
export const getNotifications = async () => {
  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  return response.data.notifications;
};