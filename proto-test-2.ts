import { test, mock } from 'node:test';
import assert from 'node:assert';

mock.module('next/server', {
  namedExports: {
    NextResponse: {
      json: (data: any, init: any) => ({
        status: init?.status || 200,
        json: async () => data,
      }),
    },
  },
});

test('mocking next/server works with dummy file', async () => {
  const { NextResponse } = await import('next/server');
  const res = NextResponse.json({ foo: 'bar' }, { status: 201 });
  assert.strictEqual(res.status, 201);
  assert.deepStrictEqual(await res.json(), { foo: 'bar' });
});
