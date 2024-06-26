# Use a temporary image for copying files
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN rm -rf node_modules .next

# Use the final image for running the app
FROM node:20
WORKDIR /app
COPY --from=builder /app .
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "dev", "--exit-zero" ]

