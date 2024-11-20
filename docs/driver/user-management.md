---
sidebar_position: 3
---

# User Management

This section outlines the API and process for driver authentication and management within the Agbero ride-booking platform. Drivers can register, log in, reset passwords, and manage their profiles through these endpoints.

---

## Authentication

To access the driver APIs, an API token is required. The supported authentication schemes include:

- **Bearer Authentication**: Use the token in the `Authorization` header for protected endpoints.

---

:::info Note

Driver accounts are primarily managed via the Agbero Driver App, available on the Play Store. This simplifies onboarding and management for developers. However, you can still perform operations like account creation, updates, and management through the provided API endpoints if required.

:::

## Endpoints

### Driver Signup

**POST** `/api/v1/driver/signup`

Registers a new driver to the platform under the specified merchant.

#### Request Body:

```json
{
  "merchant_id": "12345abcd",
  "name": "John Doe",
  "email": "driver@example.com",
  "password": "secure-password",
  "license_number": "L12345678",
  "vehicle_details": {
    "model": "Toyota Camry",
    "plate_number": "ABC-1234"
  }
}
```

---

For further assistance, please contact our support team.
