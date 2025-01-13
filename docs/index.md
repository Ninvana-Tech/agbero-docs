---
sidebar_position: 1
id: index
title: Getting Started
description: Seamlessly integrate ride-sharing services into your platform with Agbero's APIs.
slug: /
---

# agbero API Documentation 🚀

Agbero's API provides seamless ride-sharing integration for third-party platforms. This document outlines the steps and requirements for merchants to integrate with Agbero's services effectively.

## Overview

Agbero enables merchants to integrate ride-booking services with minimal setup. Below is a guide to help merchants integrate and interact with Agbero's system.

### Base URLs for API and WebView Integration

Agbero provides separate environments for testing and production to ensure seamless development and deployment.

#### Production Environment

Use the following URLs for the live production environment:

- **WebView Integration**:

```text
https://widget.agbero.com.ng
```

- **REST API**:

```text
https://api.agbero.com.ng
```

#### Testing Environment

For testing and development, use the sandbox environment:

- **WebView Integration**:

```text
https://widget-sandbox.agbero.com.ng
```

- **REST API**:

```text
https://apisandbox.agbero.com.ng
```

:::caution Caution

The sandbox environment is designed for testing purposes only. It mirrors the production environment but does not affect real data.
Ensure you replace the URLs appropriately when switching between testing and production environments.
:::

## Merchant Onboarding

To get started, you need to register as a merchant on the Agbero platform and obtain your API key. This API key will be used to authenticate your requests.

- Go to the [agbero Merchant Portal](https://merchant.agbero.com.ng) to create an account.
- After registration, you will receive an API key that you can use to interact with the agbero system.

## Integration Steps

### 1. WebView Integration

To facilitate ride bookings, merchants will embed a WebView widget into their platform. The following query parameters should be included when loading the WebView to improve the user experience:

- **User Information**:

  - `user_email`: The email address of the user booking the ride.
  - `user_name`: The full name of the user.
  - `user_phone`: The user's phone number.
  - `user_photo`: The user's profile picture.

- **Session Reference**:
  - `reference`: A unique reference to track the session and transactions related to the booking.

**WebView URL Example:**

```
https://widget.agbero.com.ng/book?API_KEY={your-api-key}&user_email={user-email}&user_name={user-name}&user_phone={user-phone}&reference={unique-reference}
```

### 2. Trip Creation Workflow

Before creating a trip, Agbero requires the merchant to validate the user's account balance. This is achieved through an endpoint provided by the merchant. The workflow is as follows:

1.  **Pre-Validation Request:**

    Agbero will send a `POST` request to the merchant's endpoint with the trip cost and user details.

    **Example Request:**

    ```json
    {
      "amount": 5000,
      "user_email": "user@example.com",
      "reference": "unique-reference"
    }
    ```

2.  **Merchant Response:**

- If the user has sufficient funds, the merchant must respond with:

  **Status Code:** `200 OK`

  **Response Body:**

            ```json
            {
              "status": "success",
              "message": "User has sufficient balance."
            }
            ```

- If the user does not have sufficient funds, the merchant must respond with:

  **Status Code:** `402 Payment Required`

  **Response Body:**

  ```json
  {
    "status": "error",
    "message": "Insufficient balance."
  }
  ```

3.  **Trip Creation:**
    - Upon receiving a `200 OK` response, Agbero will proceed to create the trip.
    - If a `402 Payment Required` response is received, the trip creation will be halted.

### 3. Webhook Integration

Merchants must provide a webhook endpoint to receive updates on trip statuses. Agbero will send `POST` requests to this endpoint whenever the trip status changes.

**Webhook Payload Example:**

```json
{
  "trip_id": "1234-5678-91039",
  "reference": "reference-provided-by-the-merchant",
  "event": "TRIP_COMPLETED",
  "data": {
    "user_email": "user@example.com",
    "driver_id": "1233-4R456-56565-5656",
    "start_time": "2025-01-13T08:00:00Z",
    "end_time": "2025-01-13T09:00:00Z"
  }
}
```

:::info Note

- Ensure your pre-validation endpoint responds promptly to minimize delays in trip creation.
- Use the recommended status codes (`200 OK` and `402 Payment Required`) to standardize communication.
  :::

### 4. Driver Integration

Drivers can donwload the agbero Driver app which is available on the Play Store. The driver will use this app to:

- Register an account
- Log in
- Accept ride requests
- Track rides in real-time

**Download the app from**: [Google Play Store - Agbero Driver App](https://play.google.com/store/apps/details?id=com.agbero.driver)

**Note**: For testing purposes, download the test driver app which connects to the sandbox environment [from this link](https://play.google.com/store/apps/details?id=com.agbero.driver)

### Driver Authentication

While drivers mainly use the app to manage their accounts, you can still interact with the driver-related API endpoints if needed. For example, you can create a driver account using the **Driver Signup** API.

#### Example Driver Signup Request

You can use the API to register a new driver programmatically. The following example shows how to register a driver via the API. An email is sent to the user which includes a default password generated by the system

```bash
curl -X POST https://api.agbero.com.ng/v1/driver/create \
  -H "Authorization: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName" : "Doe",
    "email": "driver@example.com",
}
```
