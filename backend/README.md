# Ignite backend

## Setup
1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI` to your MongoDB Atlas free-tier connection string.
3. Set mail values for Nodemailer.
4. Set `ADMIN_EMAIL` and `ADMIN_INITIAL_PASSWORD`.
5. Run `npm install`.
6. Start the server with `npm run dev`.

## Main endpoints
- `POST /api/enquiries`
- `GET /api/enquiries/admin/summary`
- `GET /api/enquiries/admin`
- `GET /api/enquiries/admin/export`
- `POST /api/admin/login`
- `POST /api/admin/change-password`
- `POST /api/admin/logout`
