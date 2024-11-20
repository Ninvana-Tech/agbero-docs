---
sidebar_position: 1
---

# Merchant API Integration

This section outlines the API and process for merchant onboarding and management within the Agbero ride-booking platform. The merchant can integrate the platform into their system, manage drivers, track bookings, and handle payments through API access.

## Authentication

To access the API, you'll need an API token. The following authentication schemes are supported:

- **Bearer Authentication**: A token is passed in the `Authorization` header for endpoints requiring user login or access to protected resources.
- **No Authentication**: Some endpoints do not require authentication.

---

## Endpoints

### Create Merchant

**POST** `/api/v1/merchant/create`

Creates a new merchant on the platform.

#### Request Body:

```json
{
  "email": "merchant@example.com",
  "password": "your-secure-password",
  "name": "Merchant Name",
  "contact": "1234567890",
  "address": "123 Merchant Street"
}
```

#### Responses:

- `200 OK`: Merchant successfully created.
- `400 Bad Request`: Missing or invalid fields.

---

### Login Merchant

**POST** `/api/v1/merchant/login`

Logs in a merchant and provides access to the platform.

#### Request Body:

```json
{
  "email": "merchant@example.com",
  "password": "your-secure-password"
}
```

#### Responses:

- `200 OK`: Login successful.
- `401 Unauthorized`: Invalid credentials.

---

### Get Merchant's Drivers

**GET** `/api/v1/merchant/drivers`

Fetches a list of drivers associated with a merchant.

#### Security:

- **Bearer Token**: Include your API token in the `Authorization` header.

#### Responses:

- `200 OK`: List of drivers.
- `403 Forbidden`: Unauthorized access.

---

### Get Merchant's Users

**GET** `/api/v1/merchant/users`

Fetches a list of users associated with a merchant.

#### Security:

- **Bearer Token**: Include your API token in the `Authorization` header.

#### Responses:

- `200 OK`: List of users.
- `403 Forbidden`: Unauthorized access.

---

### Confirm Payment

**POST** `/api/v1/merchant/trip/confirm`

Confirms the payment for a trip.

#### Request Body:

```json
{
  "tripId": "67112e9c1fe929c1491c9f16"
}
```

#### Responses:

- `200 OK`: Payment confirmed.
- `400 Bad Request`: Invalid trip ID.

---

## Integration Guidelines

To integrate the merchant API into your system, you will need to follow these guidelines:

1. **Obtain an API Token**: You must register your merchant account to receive an API token, which will be used for authentication in your requests.
2. **Make API Requests**: Use the endpoints provided above to create merchants, log in, and manage merchant-related operations.
3. **Handle Responses**: Pay attention to the status codes and responses from the API to handle success and errors in your integration.

For further assistance, consult the API reference or contact the support team.

---
