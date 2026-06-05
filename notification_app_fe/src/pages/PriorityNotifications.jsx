import React, { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { Log } from "../../../logging_middleware/logger";

import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

export default function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      await Log(
        "frontend",
        "info",
        "api",
        "Loading priority notifications"
      );

      const data = await getNotifications();

      const priority = {
        Placement: 3,
        Result: 2,
        Event: 1
      };

      const sorted = [...data].sort(
        (a, b) => {
          if (
            priority[b.Type] !==
            priority[a.Type]
          ) {
            return (
              priority[b.Type] -
              priority[a.Type]
            );
          }

          return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
          );
        }
      );

      setNotifications(
        sorted.slice(0, 10)
      );

      await Log(
        "frontend",
        "info",
        "component",
        "Top 10 notifications generated"
      );

    } catch (error) {
      console.error(error);

      await Log(
        "frontend",
        "error",
        "api",
        error.message
      );
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Top 10 Priority Notifications
      </Typography>

      {notifications.map(
        (item, index) => (
          <Card
            key={item.ID}
            sx={{ mb: 2 }}
          >
            <CardContent>
              <Typography
                variant="h6"
              >
                #{index + 1} -{" "}
                {item.Type}
              </Typography>

              <Typography>
                {item.Message}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {item.Timestamp}
              </Typography>
            </CardContent>
          </Card>
        )
      )}
    </Box>
  );
}