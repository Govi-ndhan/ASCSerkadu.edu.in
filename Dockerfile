FROM php:8.2-cli

# Copy all files
COPY . /
WORKDIR /

# Expose port 8080 (Vercel expects this)
EXPOSE 8080

# Start PHP built-in server
CMD ["php", "-S", "0.0.0.0:8080", "index.html"]
