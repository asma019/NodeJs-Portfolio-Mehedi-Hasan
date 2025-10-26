# Cloudflare Workers Deployment Guide

Deploy your Next.js portfolio to Cloudflare Workers for global edge performance.

---

## 🚀 Quick Deploy (5 Minutes)

### Prerequisites
- Cloudflare account (free tier available)
- Node.js 18+ installed
- npm or yarn

---

## 📦 Installation

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
# or
yarn global add wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate with Cloudflare.

---

## ⚙️ Configuration

### Important: Node.js Version

This project uses Node.js 18.17.0. The repository includes:
- `.node-version` - Tells Cloudflare which Node version to use
- `.nvmrc` - Alternative version specification
- `package.json` engines - Version requirements

**These files ensure your build succeeds on Cloudflare!**

### Step 1: Update wrangler.toml (For Workers only)

Edit `wrangler.toml` and add your Cloudflare account ID:

```toml
account_id = "your-cloudflare-account-id"
```

**Get your account ID:**
1. Go to https://dash.cloudflare.com/
2. Select any site (or Workers & Pages)
3. Find "Account ID" in the right sidebar
4. Copy and paste into `wrangler.toml`

### Step 2: Set Environment Variables

Cloudflare Workers uses "secrets" for sensitive data:

```bash
# Set SMTP credentials as secrets
wrangler secret put SMTP_HOST
# Enter: smtp.gmail.com

wrangler secret put SMTP_PORT
# Enter: 587

wrangler secret put SMTP_USER
# Enter: your-email@gmail.com

wrangler secret put SMTP_PASSWORD
# Enter: your-gmail-app-password

wrangler secret put MAIL_FROM
# Enter: your-email@gmail.com

# Optional: Base URL
wrangler secret put NEXT_PUBLIC_BASE_URL
# Enter: https://your-worker.workers.dev
```

---

## 🏗️ Build & Deploy

### Method 1: One Command Deploy

```bash
# Build and deploy in one step
npm run build
wrangler deploy
```

### Method 2: Step by Step

```bash
# 1. Build the project
npm run build

# 2. Deploy to Cloudflare Workers
wrangler deploy

# 3. View your deployment
wrangler tail  # Live logs
```

---

## 🌐 Custom Domain (Optional)

### Cloudflare Pages Build Settings:

**In Cloudflare Dashboard:**
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (leave blank)
```

**Environment Variables:**
```
NODE_VERSION=18.17.0
NPM_VERSION=9.8.1
NEXT_TELEMETRY_DISABLED=1
```

**Plus your SMTP variables** (see above)

### Add Custom Domain:

1. **Via Cloudflare Dashboard:**
   - Go to Workers & Pages
   - Select your project
   - Go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain
   - Follow DNS instructions

2. **DNS Configuration:**
   - Cloudflare will provide CNAME record
   - Add to your domain's DNS
   - Wait for propagation (5-10 minutes)

3. **SSL is automatic** - Cloudflare handles this!

---

## 📊 Monitoring & Logs

### View Live Logs:
```bash
wrangler tail
```

### View Deployment Info:
```bash
wrangler deployments list
```

### View Worker Details:
```bash
wrangler whoami
```

---

## 🔧 Environment Variables Management

### List all secrets:
```bash
wrangler secret list
```

### Update a secret:
```bash
wrangler secret put SMTP_PASSWORD
```

### Delete a secret:
```bash
wrangler secret delete SECRET_NAME
```

---

## ⚡ Performance Features

Cloudflare Workers provides:
- ✅ **Global Edge Network** - Deploy to 275+ cities
- ✅ **Zero Cold Starts** - Instant response times
- ✅ **Automatic Scaling** - Handle any traffic
- ✅ **Built-in DDoS Protection**
- ✅ **Free SSL/TLS**
- ✅ **WebSocket Support**

---

## 💰 Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | 100,000 requests/day, 10ms CPU time |
| **Paid** | $5/month | 10M requests/month, 50ms CPU time |

**Note:** Free tier is usually sufficient for portfolios.

---

## 🚨 Important Notes

### 1. **Compatibility with Next.js**

Cloudflare Workers has some limitations:
- ✅ API Routes work
- ✅ Server-side rendering works
- ⚠️ Some Node.js APIs limited (use `nodejs_compat` flag)
- ⚠️ File system access not available

### 2. **Email Sending**

For Cloudflare Workers, consider these alternatives to Nodemailer:

#### Option A: Use fetch with SMTP API
```javascript
// Works better on Cloudflare Workers
const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: 'recipient@example.com' }] }],
    from: { email: 'sender@example.com' },
    subject: 'Subject',
    content: [{ type: 'text/plain', value: 'Message' }],
  }),
});
```

#### Option B: Use Cloudflare Email Routing
1. Set up Email Routing in Cloudflare
2. Use fetch to send via Cloudflare's API

#### Option C: Use Resend (Recommended)
```bash
npm install resend
```

```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: ['mehedims2005@gmail.com', 'hello@mehedims.com'],
  subject: 'Contact Form',
  html: '<p>Message content</p>',
});
```

### 3. **Current Setup Compatibility**

Your current Nodemailer setup may need modifications for Cloudflare Workers:

**Option 1: Use Vercel/Heroku for Email API**
- Deploy main site to Cloudflare
- Keep `/api/contact` endpoint on Vercel/Heroku
- Make fetch request from Cloudflare to Vercel

**Option 2: Switch to HTTP-based Email Service**
- Use SendGrid API (no SMTP)
- Use Resend API
- Use Mailgun API

---

## 🔄 Alternative: Cloudflare Pages

If you want simpler deployment, use **Cloudflare Pages** instead:

### Deploy via GitHub:

1. **Connect GitHub:**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Workers & Pages"
   - Click "Create application"
   - Select "Pages" tab
   - Connect your GitHub repository

2. **Configure Build:**
   ```
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   Environment variables: Add SMTP credentials
   ```

3. **Deploy:**
   - Click "Save and Deploy"
   - Wait for build to complete

**Benefits of Pages over Workers:**
- ✅ Automatic GitHub deployments
- ✅ Preview deployments for PRs
- ✅ Better Next.js compatibility
- ✅ Easier setup

---

## 🛠️ Troubleshooting

### Issue: Build fails
**Solution:**
```bash
# Clear build cache
rm -rf .next
npm run build
wrangler deploy
```

### Issue: Secrets not working
**Solution:**
```bash
# Re-set secrets
wrangler secret put SMTP_HOST
wrangler secret put SMTP_PASSWORD
```

### Issue: Nodemailer errors
**Solution:**
- Cloudflare Workers doesn't fully support Nodemailer
- Use HTTP-based email service instead
- Or deploy API routes to Vercel/Heroku

### Issue: Cold starts
**Solution:**
- Cloudflare Workers has no cold starts by default
- If experiencing delays, check CPU time limits

---

## 📝 Development Workflow

### Local Development:
```bash
# Start local dev server
npm run dev

# Test with Wrangler locally
wrangler dev
```

### Deploy to Production:
```bash
# Build
npm run build

# Deploy
wrangler deploy

# Verify
curl https://your-worker.workers.dev
```

### Rollback:
```bash
# List deployments
wrangler deployments list

# Rollback to previous
wrangler rollback [deployment-id]
```

---

## ✅ Success Checklist

Before going live:
- [ ] Account ID set in wrangler.toml
- [ ] All secrets configured
- [ ] Build completes successfully
- [ ] Test deployment works
- [ ] Contact form tested
- [ ] Custom domain configured (optional)
- [ ] Monitoring set up

---

## 🎯 Recommended Approach

For your portfolio with email functionality:

### Best Setup:
1. **Static Pages:** Cloudflare Pages
2. **API Routes:** Vercel (for email)
3. **Cross-origin requests:** Enabled

### Steps:
1. Deploy frontend to Cloudflare Pages
2. Keep `/api/contact` on Vercel/Heroku
3. Update contact form to call Vercel API endpoint
4. Configure CORS on Vercel API

---

## 🆘 Need Help?

- **Cloudflare Docs:** https://developers.cloudflare.com/workers/
- **Wrangler Docs:** https://developers.cloudflare.com/workers/wrangler/
- **Community Discord:** https://discord.gg/cloudflaredev
- **Status Page:** https://www.cloudflarestatus.com/

---

## 📚 Additional Resources

- [Cloudflare Workers Examples](https://developers.cloudflare.com/workers/examples/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Email Routing](https://developers.cloudflare.com/email-routing/)
- [Custom Domains](https://developers.cloudflare.com/workers/platform/triggers/custom-domains/)

---

**Note:** For the most reliable email delivery, consider using Cloudflare Pages for hosting and keeping your email API on Vercel or Heroku where Nodemailer is fully supported.

