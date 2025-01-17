# Environment Variables.
# Copy this file to `.env` and enter your personal configuration details.

# Stripe API keys.
# Use your test keys for development and live keys for real charges in production.
# For non-card payments like iDEAL, live keys will redirect to real banking sites.
STRIPE_PUBLISHABLE_KEY=sk_test_URNHPZ8IkqaI5xS3FctJs0U200xl2FtltD
STRIPE_SECRET_KEY=

# Stripe webhook secret.
# Setting the webhook secret is good practice in order to verify signatures.
# After creating a webhook, click to reveal details and find your signing secret.
STRIPE_WEBHOOK_SECRET=

# Stripe account country (required for Payment Request).
STRIPE_ACCOUNT_COUNTRY=US

# Supported payment methods for the store.
# Some payment methods support only a subset of currencies.
# Make sure to check the docs: https://stripe.com/docs/sources
# Only used for servers that don't have a separate config/settings file. 
# For Node.js see the server/node/config.js file!
PAYMENT_METHODS="alipay, bancontact, card, eps, ideal, giropay, multibanco, sofort, wechat"

# Optional ngrok configuration for development (if you have a paid ngrok account).
NGROK_SUBDOMAIN=
NGROK_AUTHTOKEN=