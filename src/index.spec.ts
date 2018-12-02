/* eslint-disable tslint/config */
import { inject, injector } from '.';
import * as expect from 'expect';

afterEach(() => {
    injector.clear();
});

it('smoke test', () => {
    expect(inject).toBeTruthy();
});
