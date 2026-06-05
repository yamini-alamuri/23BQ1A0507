import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJheWFtaW5pMTUwNkBnbWFpbC5jb20iLCJleHAiOjE3ODA2NDEwNjQsImlhdCI6MTc4MDY0MDE2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjUzMmI2MDY2LWQ4M2MtNDVlZi1iYWMyLWU0M2NmNjFhMDI5NyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFsYW11cmkgeWFtaW5pIiwic3ViIjoiOGUzNDY5N2EtMmUxMy00NTI4LTlmOWItNjc0Y2I3YWU3N2ZkIn0sImVtYWlsIjoiYXlhbWluaTE1MDZAZ21haWwuY29tIiwibmFtZSI6ImFsYW11cmkgeWFtaW5pIiwicm9sbE5vIjoiMjNicTFhMDUwNyIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjhlMzQ2OTdhLTJlMTMtNDUyOC05ZjliLTY3NGNiN2FlNzdmZCIsImNsaWVudFNlY3JldCI6IlpjRWhzakJVbnFKZlR5dHEifQ.punXkTn5ecR7Xuw63pDdlJ85ibxjDuoKopNOHOK6-bU";
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