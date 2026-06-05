import React, { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { Log } from "../../../logging_middleware/logger";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from "@mui/material";

export default function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      await Log(
        "frontend",
        "info",
        "api",
        "Fetching notifications"
      );

      const data = await getNotifications();

      const notificationsWithStatus = data.map(
        (item) => ({
          ...item,
          read: false
        })
      );

      setNotifications(
        notificationsWithStatus
      );

      await Log(
        "frontend",
        "info",
        "api",
        "Notifications fetched successfully"
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

  const markAsRead = async (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.ID === id
          ? {
              ...item,
              read: true
            }
          : item
      )
    );

    await Log(
      "frontend",
      "info",
      "component",
      `Notification ${id} marked as read`
    );
  };

  const handleFilterChange = async (
    e
  ) => {
    const value = e.target.value;

    setFilter(value);
    setPage(1);

    await Log(
      "frontend",
      "info",
      "component",
      `Filter changed to ${value}`
    );
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === filter
        );

  const totalPages = Math.ceil(
    filteredNotifications.length /
      ITEMS_PER_PAGE
  );

  const startIndex =
    (page - 1) * ITEMS_PER_PAGE;

  const currentNotifications =
    filteredNotifications.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        All Notifications
      </Typography>

      <FormControl
        sx={{
          minWidth: 220,
          mb: 3
        }}
      >
        <InputLabel>
          Filter
        </InputLabel>

        <Select
          value={filter}
          label="Filter"
          onChange={
            handleFilterChange
          }
        >
          <MenuItem value="All">
            All
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>
        </Select>
      </FormControl>

      {currentNotifications.map(
        (item) => (
          <Card
            key={item.ID}
            sx={{
              mb: 2,
              cursor:
                "pointer"
            }}
            onClick={() =>
              markAsRead(
                item.ID
              )
            }
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={
                  item.read
                    ? 400
                    : 700
                }
              >
                {item.Type}
              </Typography>

              <Typography>
                {item.Message}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {
                  item.Timestamp
                }
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1
                }}
              >
                Status:
                {item.read
                  ? " Read"
                  : " Unread"}
              </Typography>
            </CardContent>
          </Card>
        )
      )}

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          disabled={page === 1}
          onClick={() =>
            setPage(
              page - 1
            )
          }
        >
          Previous
        </Button>

        <Typography
          component="span"
          sx={{ mx: 3 }}
        >
          Page {page} of{" "}
          {totalPages}
        </Typography>

        <Button
          variant="contained"
          disabled={
            page ===
              totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setPage(
              page + 1
            )
          }
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}