import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/plentymarkets-api';
import type {
  useUserOrderSearchParams as SearchParams
} from '../types';
//
const params: UseUserOrderFactoryParams<Order[], SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (context: Context, params) => {
    const orders = await context.$plentymarkets.api.getOrders();
    console.log('orders: ', orders);
    return orders.data.entries;
  }
};

export const useUserOrder = useUserOrderFactory<Order[], SearchParams>(params);
