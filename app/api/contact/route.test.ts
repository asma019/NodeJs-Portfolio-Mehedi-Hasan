import { test } from 'node:test';
import assert from 'node:assert';
import { handleContactRequest } from './logic.ts';

test('Contact API Route - SMTP Config Check', async (t) => {
  const validBody = {
    name: 'Mehedi Hasan',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'Test message body'
  };

  const createMockRequest = (body: any) => ({
    json: async () => body,
  } as any);

  const createMockDeps = () => ({
    NextResponse: {
      json: (data: any, init?: { status?: number }) => ({
        status: init?.status || 200,
        json: async () => data
      })
    },
    nodemailer: {
      createTransport: () => ({
        verify: async () => true,
        sendMail: async () => ({ messageId: 'test-id', accepted: [], rejected: [], response: 'ok' })
      })
    }
  });

  await t.test('should return 500 if SMTP_HOST is missing', async () => {
    const env = {
      SMTP_USER: 'user@example.com',
      SMTP_PASSWORD: 'password'
    };
    const req = createMockRequest(validBody);
    const deps = createMockDeps();

    const res = await handleContactRequest(req, env, deps as any);
    assert.strictEqual(res.status, 500);
    const data = await res.json();
    assert.strictEqual(data.error, 'Email service not configured. Please contact the administrator.');
  });

  await t.test('should return 500 if SMTP_USER is missing', async () => {
    const env = {
      SMTP_HOST: 'smtp.example.com',
      SMTP_PASSWORD: 'password'
    };
    const req = createMockRequest(validBody);
    const deps = createMockDeps();

    const res = await handleContactRequest(req, env, deps as any);
    assert.strictEqual(res.status, 500);
    const data = await res.json();
    assert.strictEqual(data.error, 'Email service not configured. Please contact the administrator.');
  });

  await t.test('should return 500 if SMTP_PASSWORD is missing', async () => {
    const env = {
      SMTP_HOST: 'smtp.example.com',
      SMTP_USER: 'user@example.com'
    };
    const req = createMockRequest(validBody);
    const deps = createMockDeps();

    const res = await handleContactRequest(req, env, deps as any);
    assert.strictEqual(res.status, 500);
    const data = await res.json();
    assert.strictEqual(data.error, 'Email service not configured. Please contact the administrator.');
  });

  await t.test('should return 200 if all SMTP config is present', async () => {
    const env = {
      SMTP_HOST: 'smtp.example.com',
      SMTP_USER: 'user@example.com',
      SMTP_PASSWORD: 'password',
      MAIL_FROM: 'noreply@example.com'
    };
    const req = createMockRequest(validBody);
    const deps = createMockDeps();

    const res = await handleContactRequest(req, env, deps as any);
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.strictEqual(data.message, 'Email sent successfully');
  });
});
