import redis

# Connect to Redis
r = redis.Redis(
    host='127.0.0.1',
    port=6379,
    password='mypassword123',
    decode_responses=True
)

# Test connection
print("Ping:", r.ping())  # True if connected

# Set a key-value pair
r.set("greeting", "Hello, Redis!")

# Get the value
value = r.get("greeting")
print("Value of 'greeting':", value)

# Increment a counter
r.set("counter", 0)
r.incr("counter")
print("Counter value:", r.get("counter"))
