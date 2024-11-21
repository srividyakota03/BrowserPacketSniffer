// Track request count
let requestCount = 0;

// Function to log request details
function logRequest(requestType, url, statusCode, responseTime) {
  const tableBody = document.querySelector("#logTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${++requestCount}</td>
    <td>${requestType}</td>
    <td>${url}</td>
    <td>${statusCode}</td>
    <td>${responseTime.toFixed(2)}</td>
  `;

  tableBody.appendChild(row);
}

// Intercept fetch requests
const originalFetch = window.fetch;
window.fetch = async function (...args) {
  const startTime = performance.now();
  const response = await originalFetch.apply(this, args);
  const endTime = performance.now();

  logRequest("Fetch", args[0], response.status, endTime - startTime);

  return response;
};

// Add a new URL input field
document.getElementById("addInputBtn").addEventListener("click", () => {
  const urlInputsContainer = document.getElementById("urlInputs");
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "urlInputWrapper";
  inputWrapper.innerHTML = `
    <input type="text" class="urlInput" placeholder="Enter a URL to fetch">
  `;
  urlInputsContainer.appendChild(inputWrapper);
});

// Fetch all URLs entered in the input fields
document.getElementById("fetchAllBtn").addEventListener("click", () => {
  const urlInputs = document.querySelectorAll(".urlInput");
  urlInputs.forEach(input => {
    const url = input.value.trim();
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(data => console.log("Response Data:", data))
        .catch(error => console.error("Fetch Error:", error));
    } else {
      console.warn("Empty URL skipped");
    }
  });
});