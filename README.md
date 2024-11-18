**Browser-Based Network Packet Sniffer**
The Browser-Based Network Packet Sniffer is a lightweight web application that monitors and logs HTTP requests made by a browser in real-time. Designed for web developers, network students, and learners, this tool provides an accessible way to analyze HTTP communication without the need for advanced network-level tools.

**Features:**
1.Real-Time HTTP Monitoring:
  -Captures HTTP requests and logs essential details:
      >Request Type (GET, POST, etc.)
      >URL
      >HTTP Status Code
      >Response Time
      >Response Size (if available)
2.Dynamic Display:
     -Real-time updates to a user-friendly interface without page reloads.
3.Filtering Options:
     -Filter logged requests based on type (e.g., GET, POST).

**How It Works:**
-Intercepting Requests:
  Overrides browser functions for fetch and XMLHttpRequest to log HTTP request details.
  Captures data at the application layer of the network stack.
-Dynamic Logging:
  Updates the display in real-time with request data.
-Browser Security Compliance:
  Operates within browser sandboxing rules and logs only application-level HTTP details
