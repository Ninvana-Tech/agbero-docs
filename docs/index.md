---
sidebar_position: 1
id: index
title: Getting Started
description: Seamlessly integrate ride-sharing services into your platform with Agbero's APIs.
slug: /
---

# agbero API Documentation 🚀

Agbero's API provides seamless ride-sharing integration for third-party platforms, making it easy to onboard merchants, drivers, and passengers. Below is a high-level overview of how to get started with the integration.

## Overview

Agbero provides everything you need to integrate ride-booking services with minimal setup. Here's how to get started:

# Quickstart

Follow these steps to quickly integrate Agbero's ride-booking services into your platform.

## 1. **Get API Keys**

To get started, you need to register as a merchant on the Agbero platform and obtain your API key. This API key will be used to authenticate your requests.

- Go to the [agbero Merchant Portal](https://merchant.agbero.com.ng) to create an account.
- After registration, you will receive an API key that you can use to interact with the agbero system.

## 2. **Passenger Integration**

The fastest way to integrate ride booking functionality for passengers is through a WebView. You can simply display a WebView link to allow passengers to book and track their rides.

### Steps

### 1 Create a Passenger Account

Use the `POST /api/v1/user/signup` endpoint to create a passenger account. The request should include the passenger's details.

**Example cURL Request:**

```bash
curl https://api.agbero.com.ng/api/v1/user/signup \
-H "Authorization: YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "email": "example+9@mail.com",
    "fullName": "John Doe",
    "merchant": "0AH0JQ5G",
    "phoneNumber": "+2348011122333",
    "profilePicture": "https://example.com/profile.png"
}' \
-X POST
```

### 2. Embed the following WebView link into your app or website:

```text
https://widget.agbero.com.ng/book?API_KEY={your-api-key}&user={user-email}
```

#### Flutter WebView Integration Example

```dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebViewPage extends StatefulWidget {
  @override
  _WebViewPageState createState() => _WebViewPageState();
}

class _WebViewPageState extends State<WebViewPage> {
  late WebViewController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController();
    _controller.loadUrl(
      'https://widget.agbero.com.ng/book?API_KEY=YOUR_API_KEY&user=passenger@example.com',
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Agbero Ride Booking')),
      body: WebViewWidget(controller: _controller),
    );
  }
}
```

## 3. Driver Integration

Drivers can donwload the agbero Driver app which is available on the Play Store. The driver will use this app to:

- Register an account
- Log in
- Accept ride requests
- Track rides in real-time

**Download the app from**: [Google Play Store - Agbero Driver App](https://play.google.com/store/apps/details?id=com.agbero.driver)

### Driver Authentication

While drivers mainly use the app to manage their accounts, you can still interact with the driver-related API endpoints if needed. For example, you can create a driver account using the **Driver Signup** API.

#### Example Driver Signup Request

You can use the API to register a new driver programmatically. The following example shows how to register a driver via the API.

```bash
curl -X POST https://api.agbero.com.ng/v1/driver/signup \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
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
