# YouTube Growth Automation System

Automated system to track YouTube video performance using YouTube Data API and Google Apps Script.

---

## Overview

This project helps track and analyze YouTube video performance automatically.

Instead of manually checking analytics, this system:

* Fetches latest videos
* Extracts performance metrics
* Stores data in Google Sheets
* Enables data-driven content decisions

---

## Key Features

* Automatic video data extraction
* Performance tracking (views, likes, comments)
* Google Sheets integration
* Scalable for multiple videos
* Foundation for growth analysis

---

## Data Captured

* Video ID
* Title
* Views
* Likes
* Comments

---

## How It Works

1. Fetch latest videos from channel
2. Retrieve performance metrics via API
3. Store structured data in Google Sheets
4. Use data for optimization and insights

---

## Setup Instructions

### Step 1: Create Google Sheet

Create a new sheet named:
YouTube Data

---

### Step 2: Get YouTube API Key

1. Go to Google Cloud Console
2. Enable YouTube Data API v3
3. Generate API Key

---

### Step 3: Get Channel ID

Find your YouTube Channel ID.

---

### Step 4: Add Script

Go to:
Extensions → Apps Script

Create new script and paste code from:
/scripts/youtube-analytics.js

---

### Step 5: Update Credentials

Replace:

* YOUR_YOUTUBE_API_KEY
* YOUR_CHANNEL_ID

---

### Step 6: Run Script

Run:
fetchYouTubeStats()

---

## Use Cases

* Track video performance
* Identify high-performing content
* Improve content strategy
* Build reporting dashboards

---

## Limitations

* API quota limits apply
* Does not include advanced analytics (watch time, retention)

---

## Future Improvements

* Add engagement rate calculation
* Identify top-performing videos automatically
* Integrate with Looker Studio
* Add AI-based title suggestions

---

## Tech Stack

* YouTube Data API
* Google Apps Script
* Google Sheets

---

## Outcome

* Centralized video performance tracking
* Data-driven content decisions
* Improved content optimization

---

## About Me

Manoj Kumar
Growth Architect | Performance Engineer

I build automation systems for marketing, analytics, and growth.
