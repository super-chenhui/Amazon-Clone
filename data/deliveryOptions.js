import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  return deliveryOptions.find(option => option.id === deliveryOptionId);
}

export function calculateDeliveryDate(deliveryOption) {
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');

  let newDeliveryDate;
  // Sunday:0  Saturday:6   Monday-Friday:1-5
  if (deliveryDate.day() === 0) {
    newDeliveryDate = deliveryDate.add(1, 'days');
  } else if (deliveryDate.day() === 6) {
    newDeliveryDate = deliveryDate.add(2, 'days');
  } else {
    newDeliveryDate = deliveryDate;
  }

  return newDeliveryDate.format('dddd, MMMM D');
}