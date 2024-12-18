import { USER } from '@/constants/API';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(USER.validateEmail, () => {
    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
