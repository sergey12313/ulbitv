import { describe, expect, test } from '@jest/globals';
import { cn } from './classNames';

describe('classnames module', () => {
  test('...string', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });
  test('...string', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });
  test('...string + obj', () => {
    expect(cn('foo', { bar: true })).toBe('foo bar');
  });
  test('obj with true value', () => {
    expect(cn({ 'foo-bar': true })).toBe('foo-bar');
  });
  test('obj with false value', () => {
    expect(cn({ 'foo-bar': false })).toBeUndefined();
  });
  test('...obj', () => {
    expect(cn({ foo: true }, { bar: true })).toBe('foo bar');
  });
  test('mixed', () => {
    expect(cn('foo', { bar: true, duck: false }, 'baz', { quux: true })).toBe('foo bar baz quux');
  });
  test('empty string', () => {
    expect(cn('')).toBeUndefined();
  });
  test('0', () => {
    expect(cn(0)).toBeUndefined();
  });
  test('other falsy values are just ignored', () => {
    expect(cn(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).toBe('bar 1');
  });
});
