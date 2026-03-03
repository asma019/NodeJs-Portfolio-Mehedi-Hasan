import test from 'node:test';
import assert from 'node:assert';
import { getBlurDataUrl, getImageClasses } from '../app/components/OptimizedImage.logic.ts';

test('getBlurDataUrl should return undefined if noBlur is true', () => {
  assert.strictEqual(getBlurDataUrl(true), undefined);
});

test('getBlurDataUrl should return a data URL if noBlur is false', () => {
  const result = getBlurDataUrl(false);
  assert.ok(result?.startsWith('data:image/svg+xml;base64,'));
});

test('getImageClasses should include opacity-0 when not loaded and blur is enabled', () => {
  const result = getImageClasses(false, false);
  assert.ok(result.includes('opacity-0'));
  assert.ok(!result.includes('opacity-100'));
});

test('getImageClasses should include opacity-100 when loaded', () => {
  const result = getImageClasses(true, false);
  assert.ok(result.includes('opacity-100'));
  assert.ok(!result.includes('opacity-0'));
});

test('getImageClasses should include opacity-100 when noBlur is true even if not loaded', () => {
  const result = getImageClasses(false, true);
  assert.ok(result.includes('opacity-100'));
  assert.ok(!result.includes('opacity-0'));
});

test('getImageClasses should include custom className', () => {
  const customClass = 'my-custom-class';
  const result = getImageClasses(true, false, customClass);
  assert.ok(result.includes(customClass));
});
