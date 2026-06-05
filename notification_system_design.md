# Notification System Design

## Overview

This application is developed using React and displays notifications fetched from the provided API. The system allows users to view notifications, filter them by category, navigate through pages, and identify the most important notifications based on priority.

## Features

### All Notifications

* Displays all notifications fetched from the API.
* Supports filtering by notification type (Placement, Result, Event).
* Supports pagination for easier navigation.
* Allows users to mark notifications as read.

### Priority Notifications

A separate page displays the top 10 notifications based on priority.

Priority order:

1. Placement
2. Result
3. Event

If two notifications have the same priority, the most recent notification is displayed first.

## Priority Logic

The following weights are assigned:

* Placement = 3
* Result = 2
* Event = 1

Notifications are sorted by priority and timestamp, and the top 10 notifications are displayed.

## Logging

Logging middleware is integrated to track:

* API requests
* Successful responses
* User actions
* Errors

## Technologies Used

* React
* React Router
* Material UI
* Axios

## Conclusion

The application provides an organized way to manage notifications through filtering, pagination, priority-based ranking, and logging support while maintaining a simple and responsive user interface.
