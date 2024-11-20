---
sidebar_position: 3
---

# Trip Management

This section outlines the process for accessing trip-related data for drivers within the Agbero ride-booking platform. While most trip operations are handled via the **Agbero Driver App**, developers can retrieve a driver's trip history through the provided API.

---

## Authentication

To access the trip history API, an API token is required. The supported authentication scheme includes:

- **Bearer Authentication**: Use the token in the `Authorization` header for protected endpoints.

---

:::info Note

Trip management, such as accepting rides, starting trips, and completing trips, is handled exclusively through the **Agbero Driver App**, available on the Play Store. Developers integrating the API do not need to implement these functionalities. However, you can still retrieve trip history for reporting or analytics purposes through the API.

:::

## Endpoints

### Get Driver Trip History

**GET** `/api/v1/driver/trips`

Retrieve the trip history for a driver.

#### Request Headers:

```json
{
  "Authorization": "Bearer {access_token}"
}
```

#### Query Parameters:

| Parameter | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| `page`    | Number | (Optional) The page number for pagination. |
| `limit`   | Number | (Optional) The number of results per page. |

#### Responses:

- **200 OK**: Returns the driver's trip history.
  ```json
  {
    "trips": [
      {
        "tripId": "67112e9c1fe929c1491c9f16",
        "startLocation": "123 Main St",
        "endLocation": "456 Elm St",
        "fare": 1500,
        "status": "completed",
        "date": "2024-11-18T14:30:00Z"
      },
      ...
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 45
    }
  }
  ```
- **401 Unauthorized**: Invalid or missing access token.
- **400 Bad Request**: Invalid query parameters.

---

For further assistance, please contact our support team.
