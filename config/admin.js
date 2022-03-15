module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '81095b1a44e7b4e660cf81071c8c382c'),
  },
});
