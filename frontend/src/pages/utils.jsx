async function send(endpoint, method, body = null, header = "application/json") {
    const response = await fetch(`http://localhost:8080/api${endpoint}`, {
      method,
      credentials: "include",
      headers: {
        "Content-Type": header,
      },
      body: body ? JSON.stringify(body) : undefined, // Only send body if it exists
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  
    // Check if response has a body
    const contentType = response.headers.get("Content-Type");
  
    if (contentType && contentType.includes("application/json")) {
      // If there's JSON body, return parsed JSON
      const data = await response.json();
      return data;
    }
  
    // If there's no body, return an empty object
    return {};
  }
  
  export const api = {
    get: (endpoint) => send(endpoint, "GET"),
    post: (endpoint, body) => send(endpoint, "POST", body),
    put: (endpoint, body) => send(endpoint, "PUT", body),
    delete: (endpoint) => send(endpoint, "DELETE"),
    delete2: (endpoint, body) => send(endpoint, "DELETE", body),
  };
  